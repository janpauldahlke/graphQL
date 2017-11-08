const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} = graphql;

const UserType = new GraphQLObjectType({
    name : 'UserType',
    fields: {
        email: { type : /*new GraphQLNonNull(GraphQLString)*/  GraphQLString}
    }
});

module.exports = UserType;