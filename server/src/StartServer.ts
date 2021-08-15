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

    app.get('', (_, res) =>{
        res.send({
            value: 100
        });
    })

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            //@ts-ignore
            resolvers: [
                ...UserResolvers, ...AuthResolvers
            ],
            validate: false
        }),
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})]
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    const port = process.env.PORT || 8080;

    app.listen(port, () => {
        console.log("The server started.");

    })
}

export default startServer;