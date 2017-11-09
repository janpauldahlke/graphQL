import React, { Component } from 'react';

class LoginForm extends Component{

  render(){
    return (
      <div>
      loginform
        <form>
          <label>enter email</label>
          <input className="input-field email"/>
          <label>enter password</label>
          <input className="input-field password" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
