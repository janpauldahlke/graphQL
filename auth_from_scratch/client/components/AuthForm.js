import React, {Component} from 'react';

class AuthForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmit(e){
    e.preventDefault();

    const {email, password} = this.state;

    //this.props.onAuthLoginSubmit(this.state); // object because of destructering on the other side
    //avoid mutation
    this.props.onSubmit({email, password});
  }


  render(){
  //show titties
  //console.log('titties', this.props);

    return(
      <div className="row">

        <form
            onSubmit={this.onSubmit.bind(this)}
            className="col s4">
          <div className="input-field email">

            <input
              className="validate"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({email: e.target.value})
              }}
             />
          </div>
          <div className="input-field password">

            <input

              value={this.state.password}
              onChange={(e) => {
                this.setState({password: e.target.value})
              }}
            />
          </div>
          <div className="errors">
              {this.props.error.map(err => {return(<div key={err}>{err}</div>)})}
          </div>
          <button
              onClick={this.onSubmit.bind(this)}
              className="btn-large">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
