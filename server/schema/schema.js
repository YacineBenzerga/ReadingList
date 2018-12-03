const graphql = require('graphql');
const lodash = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

var books = [
  { name: 'lord of the rings', genre: 'fantasy', id: '1' },
  { name: 'the matrix', genre: 'Sci-Fi', id: '2' }
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to get data from db/other source
        return lodash.find(books, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
