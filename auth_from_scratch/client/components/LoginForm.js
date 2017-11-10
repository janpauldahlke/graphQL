import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import AuthForm from './AuthForm.js';

import {hashHistory} from 'react-router';

import loginUserMutation from './../mutations/loginUser';
import showUserQuery from './../queries/showUser';

class LoginForm extends Component{

  constructor(props){
    super(props);

    this.state = {
      errors: []
    }
  }


  onSubmit({email,password}){ //ES2015 here

    this.props.mutate({
        variables: { email, password},
        refetchQueries: [{query: showUserQuery}]

    })
      .then((res)=> {
        this.setState({errors: []});
        hashHistory.push('/dashboard');
      })

      .catch((error) => {
        const errors = error.graphQLErrors.map((err) => {return err.message});
        this.setState({ errors : errors })
      });
  }


  //TODO contemplate on this flow callback method
  //onLoginSubmit
  //component onAuthLoginSubmit  -> this.props.onAuthLoginSubmit is used in method onLogin()
  //in Authform -> method onLogin -> form calls onSubmit={this.onLogin({//ES6 geballer)}

  render(){

    //console.log(this.props.user);

    return (
      <div className="container">
        <h5>Login</h5>
        <AuthForm
            onSubmit={this.onSubmit.bind(this)}
            error={this.state.errors}
        />
      </div>
    );
  }
}

//we dont need this to refetchqueries, as it seems
// export default graphql(loginUserMutation)(
//     graphql(showUserQuery)(LoginForm)
// );

export default graphql(loginUserMutation)(LoginForm);
