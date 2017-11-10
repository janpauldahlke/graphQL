import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {hashHistory} from 'react-router';

import AuthForm from './AuthForm.js';

import signupUserMutation from './../mutations/signupUser.js';
import showUserQuery from './../queries/showUser.js'

class SignupForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      errors : []
    }
  }

  onSubmit({email, password}){

    this.props.mutate({
        variables: {email, password},
        refetchQueries: [{query: showUserQuery}]
    }).then((res) => {
        this.setState({errors: []});
        hashHistory.push('/success');
    });
  }

  render(){
    return (

      <div>
        <AuthForm
          error={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>


    );
  }
}

export default graphql(signupUserMutation)(SignupForm);
