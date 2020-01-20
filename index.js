const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { loadFiles } = require("@graphql-toolkit/file-loading");
const mongoose = require("mongoose");
require("module-alias/register");

const GRAPH_SCHEMA_PATH = "src/graph/schema/**/*.gql";
const GRAPH_RESOLVER_PATH = "src/graph/resolver/**/*.js";
const GRAPH_API_PATH = "/graphql";
const PORT = 8080;
const MONGOOSE_CONNECTION = "mongodb://localhost/formula1";
const MONGOOSE_CONFIGURATION = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const app = express();

const typeDefs = loadFiles(path.join(__dirname, GRAPH_SCHEMA_PATH));
const resolvers = loadFiles(path.join(__dirname, GRAPH_RESOLVER_PATH));
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});
apolloServer.applyMiddleware({ app, path: GRAPH_API_PATH });

mongoose
  .connect(MONGOOSE_CONNECTION, MONGOOSE_CONFIGURATION)
  .then(() => {
    console.log("MongoDB successfully connected!");
  })
  .catch(error => {
    console.log("Error while connection to MongoDB: ", error);
  });

app.listen({ port: PORT }, () => {
  console.log(
    `Apollo server is running on http://localhost:${PORT}${GRAPH_API_PATH}`
  );
});
