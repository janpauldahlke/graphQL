import React, {Component} from 'react';
import {graphql, compose} from 'react-apollo';

import addLike from '../queries/addLikes.js';
import removeLike from '../queries/removeLikes.js';
import getSongQuery from '../queries/fetchSongByID';

class Likes extends Component {


  onAddLikeClick(){

    let optimisticLikes = this.props.likes;

    this.props.addLikeLyric({
      variables: {
        lyricId: this.props.lyricId
      },
      optimisticResponse: {
        __typename: 'Mutation',
        addLikeLyric : {
          id : this.props.lyricId,
          __typename: 'LyricType',
          likes: optimisticLikes+1
        }
      }

        //this is how to make use of an optimistic update and avoid refetching again and again
      //refetchQueries: [{query: getSongQuery, variables: {songId: this.props.songId}}]
    })
  }

  onRemoveLikeClick(){

      console.log('call Remove Click')

    this.props.removeLikeLyric({
      variables: {
        lyricId: this.props.lyricId
      },
      refetchQueries: [{query: getSongQuery, variables: {songId: this.props.songId}}]
    })
  }


//-------------------
  render(){
    //show titties
    console.log('likesProps', this.props)

    return(
      <div className="row">
        <div className="col-4 card text-center">{this.props.likes} Likes</div>
        <div className="col-4 btn btn-sm btn-success"
          onClick={this.onAddLikeClick.bind(this)}
          >upvote</div>
        <div className="col-4 btn btn-sm btn-warning"
          onClick={this.onRemoveLikeClick.bind(this)}
          >downvote</div>
      </div>
    );
  }
}

const LikesWithMutations = compose(
  graphql(addLike, {name: 'addLikeLyric'}),
  graphql(removeLike, {name: 'removeLikeLyric'})
)(Likes);

export default LikesWithMutations;
