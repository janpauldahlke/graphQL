import React, { Component } from 'react';

class SignupForm extends Component{

  render(){
    return (
      <div>
      SigninForm
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

export default SignupForm;
