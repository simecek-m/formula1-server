const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { loadFiles } = require("@graphql-toolkit/file-loading");

const GRAPH_SCHEMA_PATH = "graph/schema/**/*.gql";
const GRAPH_RESOLVER_PATH = "graph/resolver/**/*.js";
const GRAPH_API_PATH = "/graphql";
const PORT = 8080;

const app = express();

const typeDefs = loadFiles(path.join(__dirname, GRAPH_SCHEMA_PATH));
const resolvers = loadFiles(path.join(__dirname, GRAPH_RESOLVER_PATH));
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});
apolloServer.applyMiddleware({ app, path: GRAPH_API_PATH });

app.listen({ port: PORT }, () => {
  console.log(
    `Apollo server is running on http://localhost:${PORT}${GRAPH_API_PATH}`
  );
});
