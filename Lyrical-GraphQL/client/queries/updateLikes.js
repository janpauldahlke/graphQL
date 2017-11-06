import gql from 'graphql-tag';

export default gql`
mutation addLikesToGivenLyric($lyricId: ID){
  likeLyric(id: $lyricId) {
    id,
    content,
    likes

  }
}
`
