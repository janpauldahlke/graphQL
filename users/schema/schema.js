//linchpin of all graphql apps
//hard code style // difficult to read, BUT
//repetitive

const _ = require('lodash');


const graphql = require('graphql');
const {
  GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;



//--data objec
const users = [
    {id: '23', name: 'peter', age: 18},
    {id: '42', name: 'parker', age: 27}
]

//----

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

//apply root Query, as entry fpr graph

const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields: {
      user: {
        type: UserType,                          //what the rootquery will return on question
        args: { id : { type: GraphQLString } },  // what the root query is beeing asked for
        //vip function in graph,
        //grab real data and not just a TypeDefinition
        resolve(parentValue, args) {
          //not dynamic yet but hardcoded
          //using lodash like...
          return _.find(users, {id: args.id})
        }
      }
    }
});

//merge Types into a GeraphQLSchema
//pass it a RootQuery
module.exports = new GraphQLSchema ({
    query: RootQuery
})