import React, {Component} from 'react';

class AuthForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  onLogin(e){
    e.preventDefault();
    this.props.onAuthLoginSubmit(this.state); // object because of destructering on the other side
  }

  render(){
  //show titties
  //console.log(this.props);

    return(
      <div className="row">
        <form
            onSubmit={this.onLogin.bind(this)}
            className="col s4">
          <div className="input-field email">
            <label>Email</label>
            <input
              value={this.state.email}
              onChange={(e) => {
                this.setState({email: e.target.value})
              }}
             />
          </div>
          <div className="input-field password">
            <label>password</label>
            <input
              value={this.state.password}
              onChange={(e) => {
                this.setState({password: e.target.value})
              }}
            />
          </div>
          <button

              className="btn-large">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
