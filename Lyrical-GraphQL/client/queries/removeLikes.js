import gql from 'graphql-tag';

export default gql`
mutation removeLikesFromGivenLyric($lyricId: ID){
  removeLikeLyric(id: $lyricId) {
    id,
    content,
    likes
  }
}
`
