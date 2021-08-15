import { createConnection, useContainer } from "typeorm";
import "reflect-metadata";
import dataSourceConfiguration from './db/config/DatasourceConfiguration';
import { User } from "./domain/entities/User";
import getUserRepository from "./domain/repositories/UserRepository";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloWorldResolver } from "./graphql/resolvers/HelloWorldResolver";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { Container } from "typeorm-typedi-extensions";
import { UserMutationResolver } from "./graphql/resolvers/user/UserMutationResolver";

const startServer = async () => {
    //Setup DI container
    useContainer(Container);

    // Database connection
    await createConnection(dataSourceConfiguration);

    const app = express();

    // Dummy endpoint to test server and database connection
    app.get("/users", async (_, res) => {
        const userRepository = getUserRepository();
        const users: User[] = await userRepository.find({});
        res.json(users);
    })

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloWorldResolver, UserMutationResolver],
            validate: false
        }),
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})]
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app });

    app.listen(8080, () => {
        console.log("The server is listening on port 8080");

    })

    /* .then(async (_connection) => {
        console.log("Connected to the DB");
        const userRepository = getUserRepository();
        const users: User[] = await userRepository.find({});
        console.log(users);
    })
    .catch((err) => {
        console.log("Unable to connect to db", err);
        process.exit(1);
    }); */
}

export default startServer;