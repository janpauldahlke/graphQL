import React, {Component} from 'react';
import gql from 'graphql-tag'; // helper that allows to write gqueries in jsx files
import {graphql} from 'react-apollo'; // helper that bounds component and query to execute against server
import {Link} from 'react-router';
import _ from 'lodash';

import fetchSongsQuery from '../queries/fetchSongs';

class SongList extends Component {

    renderSongs() {

        return _.map(this.props.data.songs, (song) => {

            //console.log(song.id);

                return (
                    <li key={song.id} className="list-group-item">
                        {song.title}
                    </li>
                );
            }
        );
    }

    render() {

        if(this.props.data.loading){
            return <div>loading.....</div>
        }

        if(!this.props.data.loading && this.props.data.songs.length > 0){

            const {songs} = this.props.data;

            return (
                <div className="row songlist">
                    <div className="col-12 card song-list">

                      <Link to="songs/new">
                          <div className="btn btn-success">add new song</div>
                      </Link>


                      <br />

                        <ul className="list-group">
                            {this.renderSongs()}
                        </ul>

                    </div>
                </div>
            );
        }
    }
}

// //adventurours syntax one might think gql ``
// const ListSongsQuery = gql`
//     query ListSongs{
//             songs{
//                 title,
//                 id
//             }
//         }
// `;

//redux like connect flatten object
export default graphql(fetchSongsQuery)(SongList);
