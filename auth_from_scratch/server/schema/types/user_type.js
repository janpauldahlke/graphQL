const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID
} = graphql;

const UserType = new GraphQLObjectType({
    name : 'UserType',
    fields: {
        id: { type: GraphQLID},
        email: { type : /*new GraphQLNonNull(GraphQLString)*/  GraphQLString}
    }
});

module.exports = UserType;