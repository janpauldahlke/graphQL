import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';


class SongCreate extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: ''
    }
  }

handleSubmit(e){
  e.preventDefault();


}


render() {
    //control structure
    //console.log('state', this.state.title)
      return (
        <div>
          <h5>New Song</h5>
          <form
            onSubmit={this.handleSubmit.bind(this)}
            >
            <label>create new song:</label>
            <input className="form-control"
              onChange={(e) => {
                this.setState({ title : e.target.value})
              }}
              value={this.state.title}
              />
          </form>
        </div>
      );
  }
}

//problem how to get the state from component into the outside const ?
//query variables will come into play
//they demand another syntax on wrting mutations
const createSongMutation = gql`
 mutation{
   addSong(title : ${}){
     id
   }
 }
`;

export default SongCreate(createSongMutation)(SongCreate);
