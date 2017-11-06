import gql from 'graphql-tag'

export default gql`
mutation AddLyricLineToSongWithGivenId($songId:ID, $content:String){
  addLyricToSong(songId:$songId, content:$content){
    lyrics {
      content
    }
  }
}
`