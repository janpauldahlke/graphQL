import gql from 'graphql-tag';

export default gql`
    query showUser{
      currentUser {
        email
      }
    }
`