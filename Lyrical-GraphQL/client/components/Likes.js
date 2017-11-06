import React, {Component} from 'react';
import graphql from 'react-apollo';

class Likes extends Component {

  render(){
    return(
      <div className="row">
        <div className="col-4 card text-center">count: Likes</div>
        <div className="col-4 btn btn-sm btn-success">upvote</div>
        <div className="col-4 btn btn-sm btn-warning">downvote</div>
      </div>
    );
  }
}

export default Likes;
