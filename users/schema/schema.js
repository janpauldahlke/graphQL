//linchpin of all graphql apps
//hard code style // difficult to read, BUT
//repetitive


const graphql = require('graphql');
const {
  GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql;


//instructs graphql how user looks like
const UserType = new GraphQLObjectType({
    name: 'User',
//fields need types and GraphQl has types , so import them via desctructering
    fields: {
      id: { type: GraphQLString} ,
      firstName:{ type: GraphQLString} ,
      age: { type: GraphQLInt}
    }
});
