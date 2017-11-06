import React, { Component } from 'react';
import {graphql} from 'react-apollo'; // import graphql from 'react-apollo'; will produce an error, care about this sh1t !!!
import {Link} from 'react-router';

import getSongQuery from '../queries/fetchSongByID';

class SongDetail extends Component{

    render() {

        //let me see you naked
        //console.log(this.props) -> check params object

        return (
            <div className="container">
                <Link to="/" className="btn btn-success" >Back to Main</Link>
                <br />
                <h5>SongDetails:</h5>
            </div>
        )

    }
}

//export default SongDetail;
//? how to intercept the query and pass it the query variable?
// 2nd argument of query is an options object, that keeps
//lol syntax is quite difficulte here, learn this shit eager

export default graphql(getSongQuery, {
    options: (props) => { return { variables : { id: props.params.id } } }
})(SongDetail);


