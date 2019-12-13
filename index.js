const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const GRAPH_API_PATH = "/graphql";
const PORT = 8080;

const app = express();

const typeDefs = gql`
  type Query {
    teams: [Team]
  }

  type Team {
    name: String!
    ceo: String
    active: Boolean
  }
`;

const resolvers = {
  Query: {
    teams: () => {
      return [
        {
          name: "Mercedes",
          ceo: "Toto Wolff",
          active: true
        },
        {
          name: "Ferrari",
          ceo: "Mattia Binotto"
        }
      ];
    }
  }
};

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
