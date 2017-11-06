import React, { Component } from 'react';
import graphlql from 'react-apollo';

import {Link} from 'react-router';

class SongDetail extends Component{

    render() {

        //let me see you naked
        //console.log(this.props)

        return (
            <div className="container">
                <Link to="/" className="btn btn-success" >Back to Main</Link>
                <br />
                <h5>SongDetails:</h5>
            </div>
        )

    }
}

export default SongDetail;


