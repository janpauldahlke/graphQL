const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString
} = graphql;
//we make use of helper from /services/auth.js

const AuthService = require('../services/auth');
const UserType = require('./types/user_type');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup : {
            type: UserType, //returnType,
            args : {
               email: {type: GraphQLString},
               password : {type: GraphQLString}
            },
            resolve(parentValue, args, request /*=context: represents the request object from express*/){
                //make use of helper object auth to avoid toins of logic in resolve
                return AuthService.signup({
                    email: args.email,
                    password: args.password,
                    req: request
                })
            }
        }
    }
});

module.exports = mutation;