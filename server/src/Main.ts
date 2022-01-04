import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { Service } from "typedi";
import { Container } from "typeorm-typedi-extensions";
import { GraphqlContext } from "./graphql/context/GraphqlContext";
import { GraphqlContextBuilder } from "./graphql/context/GraphqlContextBuilder";
import { Resolvers } from "./graphql/resolvers";

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
                    ...Resolvers
                ],
                validate: false
            }),
            plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
            context: async ({ req }) => {
                const context: GraphqlContext = await this.graphqlContextBuilder.build(req);
                return context;
            }
        });

        await apolloServer.start();
        apolloServer.applyMiddleware({ app });

        const port = process.env.PORT || 8080;

        app.listen(port, () => {
            console.log("The server started.");

        })
    }
}