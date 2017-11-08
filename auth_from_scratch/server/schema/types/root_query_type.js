const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID
} = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  //to start up add a dummy field
  fields: {
    dummyField : { type : GraphQLID }
  }
});

module.exports = RootQueryType;
