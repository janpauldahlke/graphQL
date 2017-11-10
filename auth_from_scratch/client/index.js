import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import App from './components/App.js';
import LoginForm from './components/LoginForm.js';

const netWorkInterface = createNetworkInterface({
    uri: '/graphql',// this refers to auth_from_scratch/server/server.js line 53 '/graphql'
    //opts realy matter here and same origin points to same localhost
    opts: {
        credentials : 'same-origin' // this sends the cookies
    }
});

const client = new ApolloClient({
    networkInterface: netWorkInterface, //mean typo shit
    dataIdFromObject : o => o.id,
});

const Root = () => {
  return (
      <ApolloProvider client={client}>
          <Router history={hashHistory}>
              <Route path="/" component={App}>
                <Route path="login" component={LoginForm} />

              </Route>
          </Router>
      </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
