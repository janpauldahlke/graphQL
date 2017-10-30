//linchpin of all graphql apps
//hard code style // difficult to read, BUT
//repetitive

//const _ = require('lodash');
const graphql = require('graphql');
const axios = require('axios');

const serveJSONDb = 'http://localhost:3000';

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList
} = graphql;


//beware // if user should contain company, companytype needs to be declared ABOVE UserType!!!
const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
        id: {type : GraphQLString},
        name: {type : GraphQLString},
        description : {type : GraphQLString},
        users : {
            type: new GraphQLList(UserType), // tell graph that this will return a list of users // not defined so... nodemon crashes //Classic js error, do not try to make use of a variable before its declaration // to solve this. wrap your fields template into an arrow function to return an object on callback/closure
            resolve(parentValue, args) {
                return axios.get(`${serveJSONDb}/companies/${parentValue.id}/users`)
                    .then(resp => resp.data)
            }
        }
    })
});



//instructs graphql how user looks like
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString} ,
        firstName:{ type: GraphQLString},
        age: { type: GraphQLInt},
        //this is an unidirectional link
        company: {
            type: CompanyType,
            //resolve populates companyID from jsonDB to UserType field: company
            resolve(parentValue, args) {

                return axios.get(`${serveJSONDb}/companies/${parentValue.companyId}`)
                    .then(response => response.data);
            }
        }
    })
});


/*
* one can name queries like this
* query namedQuery {
*   foo,
*   bar,
*   user {
*       faz,
*       foz
*   }
* }
*
* */

/*
* bidirectional linking allows really stopid things like this query
* {
  company(id:"2") {
    id
    name,
    description
    users {
      firstName,
      age,
      id
      company {
        name,
        users {
          age,
          company {
            name,
            users {
              firstName
            }
          }
        }
      }
    }
  }
}
*
*
* */


//apply root Query, as entry for graph

const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields: () => ({
        user: {
            type: UserType,                          //what the rootquery will return on question
            args: { id : { type: GraphQLString } },  // what the root query is beeing asked for
            //vip function in graph,
            //grab real data and not just a TypeDefinition

            //resolve can fetch from anywhere
            resolve(parentValue, args) {
                //not dynamic yet but hardcoded
                //using lodash like...
                //return _.find(users, {id: args.id})

                //point to localhost:3000 / where JSON-server servers
                return axios.get(`${serveJSONDb}/users/${args.id}`)
                    .then(response => response.data) //bind axios data to promise

            }
        },
        //repeat and works allows querries like
        /*
        {
          company(id:"1") {
            name,
            description
          }
        }
        * */
        company: {
            type: CompanyType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`${serveJSONDb}/companies/${args.id}`)
                    .then(res => res.data);
            }
        }
    })
});

//merge Types into a GeraphQLSchema
//pass it a RootQuery
module.exports = new GraphQLSchema ({
    query: RootQuery
});