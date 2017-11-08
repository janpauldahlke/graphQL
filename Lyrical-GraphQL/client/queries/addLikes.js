import gql from 'graphql-tag';

export default gql`
mutation addLikesToGivenLyric($lyricId: ID){
  addLikeLyric(id: $lyricId) {
    id,
    likes
  }
}
`
