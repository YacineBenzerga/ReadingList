const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(
  'mongodb://yacine:gql2334@ds051953.mlab.com:51953/gql-readinglist'
);
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(8080, () => {
  console.log('now listening on port 4000');
});
