import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { Service } from "typedi";
import { useContainer } from "typeorm";
import { Container } from "typeorm-typedi-extensions";
import { GraphqlContextBuilder } from "./graphql/context/GraphqlContextBuilder";
import { AuthResolvers } from "./graphql/resolvers/auth/AuthResolver";
import { UserResolvers } from "./graphql/resolvers/user/UserResolver";

@Service()
export class Main {

    graphqlContextBuilder: GraphqlContextBuilder;

    constructor() {
        this.graphqlContextBuilder = Container.get(GraphqlContextBuilder);
    }

    public startServer = async () => {
        
        const app = express();

        app.get('', (_, res) => {
            res.send({
                value: 100
            });
        });

        const apolloServer = new ApolloServer({
            schema: await buildSchema({
                resolvers: [
                    ...UserResolvers,
                    ...AuthResolvers
                ],
                validate: false
            }),
            plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
            context: ({ req }) => ({ context: this.graphqlContextBuilder.build(req) })
        });

        await apolloServer.start();
        apolloServer.applyMiddleware({ app });

        const port = process.env.PORT || 8080;

        app.listen(port, () => {
            console.log("The server started.");

        })
    }
}