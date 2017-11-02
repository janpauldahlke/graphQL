import React, { Component } from 'react';
import gql from 'graphql-tag';

class SongCreate extends Component{

    constructor(props){
        super(props);

        this.state={ title: ''};
    }

    render() {
        return(
            <div>
                <h5>create a new song</h5>
                <form>
                    <label>Song Title:</label>
                    <input className="form-control"
                        onChange={e => this.setState({title: e.target.value})}
                        value={this.state.title}/>
                </form>
            </div>
        );
    }

}


//mutations for create will go here
//import gql therefore

export default SongCreate;