import React, {Component} from 'react';
import {graphql} from 'react-apollo'; // import graphql from 'react-apollo'; will produce an error, care about this sh1t !!!
import {Link} from 'react-router';

import getSongQuery from '../queries/fetchSongByID';

class SongDetail extends Component {

    render() {
        //let me see you naked
        //console.log(!this.props.data.song)

        const {song} = this.props.data;

        if (!song) { // maybe its better to ask for this.props.loading !
            return (
                <div>Loading..</div>
            )
        }

        return (
            <div className="container card">
                <Link to="/" className="btn btn-success">Back to Main</Link>
                <br/>
                <div className="card">
                    <h5>SongDetails:</h5>
                    <br/>
                    <p>Title: {song.title}</p>
                    <p>Id: {song.id}</p>
                </div>
            </div>
        )

    }
}

//export default SongDetail;
//? how to intercept the query and pass it the query variable?
// 2nd argument of query is an options object, that keeps
//lol syntax is quite difficulte here, learn this shit eager
//THIS IS A PATTERN!!! use it

export default graphql(getSongQuery, {
    options: (props) => {
        return {variables: {songId: props.params.id}}
    }
})(SongDetail);



