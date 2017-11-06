import React, {Component} from 'react';
import {graphql} from 'react-apollo';

import addLike from '../queries/addLikes.js';
import removeLike from '../queries/removeLikes.js';
import getSongQuery from '../queries/fetchSongByID';

class Likes extends Component {

  onAddLikeClick(){
    this.props.mutate({
      variables: {
        lyricId: this.props.id
      },
      refetchQueries: [query: getSongQuery, {variables: {songId: this.props.songId}}]
    })
  }

  onRemoveLikeClick(){
    this.props.mutate({
      variables: {
        lyricId: this.props.id
      },
      refetchQueries: [query: getSongQuery, {variables: {songId: this.props.songId}}]
    })
  }


//-------------------
  render(){

    console.log('likesProps', this.props)

    return(
      <div className="row">
        <div className="col-4 card text-center">{this.props.likes} Likes</div>
        <div className="col-4 btn btn-sm btn-success">upvote</div>
        <div className="col-4 btn btn-sm btn-warning">downvote</div>
      </div>
    );
  }
}

export default graphql(addLike)(Likes);
