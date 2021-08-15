import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection, useContainer } from "typeorm";
import { Container } from "typeorm-typedi-extensions";
import dataSourceConfiguration from './db/config/DatasourceConfiguration';
import { AuthResolvers } from "./graphql/resolvers/auth/AuthResolver";
import { UserResolvers } from "./graphql/resolvers/user/UserResolver";

const startServer = async () => {
    //Setup DI container
    useContainer(Container);

    // Database connection
    await createConnection(dataSourceConfiguration);

    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                ...UserResolvers, ...AuthResolvers
            ],
            validate: false
        }),
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})]
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    app.listen(8080, () => {
        console.log("The server is listening on port 8080");

    })
}

export default startServer;