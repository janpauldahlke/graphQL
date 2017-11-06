import gql from 'graphql-tag';

const addLikeQuery = gql`
mutation addLikesToGivenLyric($lyricId: ID){
  addLikeLyric(id: $lyricId) {
    id,
    content,
    likes
  }
}
`;

const removeLikeQuery = gql`
mutation removeLikesFromGivenLyric($lyricId: ID){
  removeLikeLyric(id: $lyricId) {
    id,
    content,
    likes
  }
}
`;


const removeLike = export removeLikeQuery
const addLike = export addLikeQuery;
