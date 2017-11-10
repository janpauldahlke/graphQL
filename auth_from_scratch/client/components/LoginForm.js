import React, { Component } from 'react';
import { graphql } from 'graphql-tag';
import AuthForm from './AuthForm.js';
import loginUserMutation from './../mutations/loginUser';

class LoginForm extends Component{

  render(){
    return (
      <div className="container">
        <AuthForm />
      </div>
    );
  }
}
export default graphql(loginUserMutation)(LoginForm);
