const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const port = 4000;
const app = express();

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`Listing to Port ${port}`);
});
