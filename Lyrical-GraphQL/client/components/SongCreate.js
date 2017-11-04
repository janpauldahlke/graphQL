import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

import {Link, hashHistory} from 'react-router';

class SongCreate extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: ''
    }
  }

handleSubmit(e){
  e.preventDefault();

  console.log(this.props)

  this.props.mutate({
    variables: {
      title: this.state.title
    }
  }).then((res) => {
    //console.log('from mutation promise',res);
      hashHistory.push('/')
    //handle user percepion, by adding loading spinner, while load
  }).catch((error) => {
    //if there is an error validation an server, we can throw it back here
  })


  //reset state to clear value
  //this.setState({title: ''})


}

render() {
    //control structure
    //console.log('state', this.state.title)
      return (
        <div>
          <h5>New Song</h5>

          <Link to="/">
            <div className="btn btn-success">back to list</div>
          </Link>

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
const mutation = gql`
 mutation AddSong($title: String){
   addSong(title : $title){
     title
   }
 }
`;
//query returns props.data
//mutation return props.mutate
export default graphql(mutation)(SongCreate);
