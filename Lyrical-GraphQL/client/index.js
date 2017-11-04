import './style/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'; //v3 because stable

import ApolloClient from 'apollo-client'; //completly agnostic to react/angular etc
import {ApolloProvider} from 'react-apollo'; // here comes the react-wrapper "glue-layer"

import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';


//------------------

const client = new ApolloClient({});

// its better if Router is child of ApolloProvider

const Root = () => {
    return (
        <ApolloProvider client={client}>

                <Router history={hashHistory}>

                    <Route path="/" component={App}>
                        <IndexRoute component={SongList} />
                        <Route path="songs/new" component={SongCreate} />
                    </Route>

                </Router>

        </ApolloProvider>
    );
};

ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);
