import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  # type models
  type Card {
    id: ID
    title: String
    column: Column!
  }

  type Column {
    id: ID
    name: String
    cards: [Card!]! @relation
  }

  type Project {
    id: ID
    name: String
    columns: [Column!]! @relation
  }
  # Get Query
  type Query {
    getCards: [Card]
    getCard(title: String!): Card!
    getColumns: [Column]
    getColumn(name: String): Column!
    getProjects: [Project]
    getProject(name: String): Project!
  }
  #   Mutations
  type Mutation {
    # create
    addProject(input: Project): Project
    addColumn(input: Column): Column
    addCard(input: Card): Card
    # destroy
    deleteCard(id: ID!): Boolean!
    deleteColumn(id: ID!): Boolean!
    deleteProject(id: ID!): Boolean!
    # patch
    updateCard(id: ID!, title: String): Card
    updateColumn(id: ID!, name: String): Column
    updateColumn(id: ID!, name: String): Project
  }
`;
