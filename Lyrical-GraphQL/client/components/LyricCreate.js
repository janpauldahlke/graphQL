import React, {Component} from 'react';
import {graphql} from 'react-apollo';

import addLyricLineToSong from '../queries/addLyricLineToSong';
import getSongQuery from '../queries/fetchSongByID';

class LyricCreate extends Component{

    constructor(props){
        super(props);

        this.state = {
            content : ''
        }
    }

    onInputChange(e){
        e.preventDefault();
        this.setState({
            content: e.target.value
        });
    }

    addLyricLine(id, content){

        this.props.mutate({
            variables : {
                songId: id,
                content: content
            },
            refetchQueries: [{query: getSongQuery, variables: {songId: id}}]
        })

        this.setState({ content: ''})
    }

    onFormSubmit (e) {
        e.preventDefault();
       this.addLyricLine(this.props.id, this.state.content)
    }


    render(){

        //nudicity on state
        //console.log(this.state.content);

        return(
            <div>
                <h5>Add new Lyrics:</h5>
                <form
                    onSubmit={this.onFormSubmit.bind(this)}
                >
                    <label>add</label>
                    <input
                        className="form-control"
                        onChange={this.onInputChange.bind(this)}
                        value={this.state.content}
                    />
                </form>
            </div>
        );
    }
}

//gql later here
//export default LyricCreate;
export default graphql(addLyricLineToSong)(LyricCreate)