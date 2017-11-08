const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} = graphql;
//we make use of helper from /services/auth.js

const AuthService = require('../services/auth');
const UserType = require('./types/user_type');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup : {
            type : UserType, //returnType,
            args : {
               email: {type: new GraphQLNonNull(GraphQLString)},
               password : {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, args, request /*=context: represents the request object from express*/){
                //make use of helper object auth to avoid toins of logic in resolve
                return AuthService.signup({
                    email: args.email,
                    password: args.password,
                    req: request
                })
            }
        },
        logout : {
            type : UserType,
            resolve(parentValue, args, request){
                const {user} = request; // save a reference of the user, because we can not return anything if logout() has been called
                request.logout();
                return user; // one can move this logic to authService
            }
        },
        login : {
            type : UserType,
            args : {
                email: {type: GraphQLString},
                password: {type: GraphQLString}
            },
            resolve(parentValue, args, request) {

                return AuthService.login({
                    email: args.email,
                    password: args.password,
                    req: request
                })
            }
        }
    }
});

module.exports = mutation;