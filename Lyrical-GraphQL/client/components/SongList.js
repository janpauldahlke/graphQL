import React, {Component} from 'react';
//import gql from 'graphql-tag'; // helper that allows to write gqueries in jsx files
import {graphql} from 'react-apollo'; // helper that bounds component and query to execute against server
import {Link} from 'react-router';
import _ from 'lodash';

import swal from 'sweetalert';



//apollo know that the query wold run twice in case of create and doesnt DO it, nice and clean
import fetchSongsQuery from '../queries/fetchSongs';
import deleteSong from '../queries/deleteSong';

class SongList extends Component {

    onSongDelete(id) {

      this.props.mutate({
        variables : {
          id: id
        },
        refetchQueries: [{query: fetchSongsQuery}]
      })

      swal("deleted", "song deleted", "success");

    }

    renderSongs() {

        return _.map(this.props.data.songs, (song) => {

            //console.log(song.id);

            const that = this;

                return (
                    <li key={song.id} className="list-group-item">
                        {song.title}
                        <div className="float-right">
                        <Link
                            className="btn btn-success btn-sm "
                            to={'songs/'+song.id}>Detail</Link>
                        <div
                          onClick={() => {
                            this.onSongDelete(song.id)}}
                          className="btn btn-danger btn-sm"
                          >delete</div>
                        </div>
                    </li>
                );
            }
        );
    }

    render() {

        if(this.props.data.loading){
            return <div>loading.....</div>
        }

        if(!this.props.data.loading){

            const {songs} = this.props.data;

            return (
                <div className="row songlist">
                    <div className="col-12 card song-list">

                      <Link to="songs/new">
                          <div className="btn btn-success">add new song</div>
                      </Link>


                      <br />
                        {(this.props.data.songs.length > 0) && (
                          <ul className="list-group">
                              {this.renderSongs()}
                          </ul>
                        )}
                        </div>
                </div>
            );
        }

    }
}

//redux like connect flatten object

//to bad this isntn working
//export default ([deleteSong, fetchSongsQuery])(SongList);

//syntax is qt lol rough spot
export default graphql(deleteSong)(
  graphql(fetchSongsQuery)(SongList)
);
