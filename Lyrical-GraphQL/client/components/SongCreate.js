import React, {Component} from 'react';



class SongCreate extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: ''
    }
  }



render() {

    //control structure
    //console.log('state', this.state.title)

      return (
        <div>
          <h5>New Song</h5>
          <form>
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

export default SongCreate;
