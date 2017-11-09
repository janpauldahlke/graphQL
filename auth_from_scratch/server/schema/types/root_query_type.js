const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID
} = graphql;
//
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  //to start up add a dummy field
  fields: {
    user : {
      type : UserType,
      resolve(parentValue, args, request){
        //here comes passport into play
        //if user is loggedIn , there should be a user property on request like (!isNullOrUndefined(request.user))
        return request.user;
      }
    }
  }
});

module.exports = RootQueryType;
