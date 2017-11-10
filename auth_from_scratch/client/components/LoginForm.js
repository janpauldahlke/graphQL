import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import AuthForm from './AuthForm.js';

import loginUserMutation from './../mutations/loginUser';

class LoginForm extends Component{

  onLoginSubmit({email,password}){ //ES2015 here

    this.props.mutate({
        variables: { email, password}
    });
  }


  //TODO contemplate on this flow callback method
  //onLoginSubmit
  //component onAuthLoginSubmit  -> this.props.onAuthLoginSubmit is used in method onLogin()
  //in Authform -> method onLogin -> form calls onSubmit={this.onLogin({//ES6 geballer)}
  //
  render(){
    return (
      <div className="container">
        <AuthForm onAuthLoginSubmit={this.onLoginSubmit.bind(this)}/>
      </div>
    );
  }
}
export default graphql(loginUserMutation)(LoginForm);
