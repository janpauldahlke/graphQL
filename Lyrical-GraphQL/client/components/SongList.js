import React, {Component} from 'react';
import gql from 'graphql-tag'; // helper that allows to write gqueries in jsx files
import {graphql} from 'react-apollo'; // helper that bounds component and query to execute against server
import _ from 'lodash';

class SongList extends Component {

    renderSongs() {

        return _.map(this.props.data.songs, (song) => {

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

                        <ul className="list-group">
                            {this.renderSongs()}
                        </ul>

                    </div>
                </div>
            );
        }
    }
}

//adventurours syntax one might think gql ``
const ListSongsQuery = gql`
    query ListSongs{
            songs{
                title,
                id
            }
        }
`;

//redux like connect flatten object
export default graphql(ListSongsQuery)(SongList);