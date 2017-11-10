import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import AuthForm from './AuthForm.js';

import loginUserMutation from './../mutations/loginUser';
import showUserQuery from './../queries/showUser';

class LoginForm extends Component{

  constructor(props){
    super(props);

    this.state = {
      error: ''
    }
  }


  onLoginSubmit({email,password}){ //ES2015 here

    this.props.mutate({
        variables: { email, password},
        refetchQueries: [{query: showUserQuery}]

    })
      .then((res)=> {
        this.setState({error: ''})
      })

      .catch((errors) => {
        let error = JSON.parse(JSON.stringify(errors));
        //console.log(error.message);
        this.setState({
            error: error.message
        })
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
            onAuthLoginSubmit={this.onLoginSubmit.bind(this)}
            error={this.state.error}
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
