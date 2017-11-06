import gql from 'graphql-tag';

export default gql`
query GetSongByID($songId:ID!){
  song(id:$songId){
    id,
    title,
    lyrics {
        content
    }
  }
}
`