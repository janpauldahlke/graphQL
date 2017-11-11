import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import { hashHistory} from 'react-router';

import { isNullOrUndefined } from 'util';

import Dashboard from './Dashboard.js';
import showUserQuery from './../queries/showUser.js';

export default (WrappedComponent) => {
  class RequireAuth extends Component{

      componentWillUpdate(nextProps){
        if(!nextProps.data.loading && isNullOrUndefined(nextProps.data.user)){
          hashHistory.push('/login');
        }
      }

      render(){
        return(
          <WrappedComponent {...this.props} />
        )
      }
  }
  return graphql (showUserQuery)(RequireAuth);
}
