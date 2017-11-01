import './style/style.css';

import React from 'react';
import ReactDOM from 'react-dom';

import ApolloClient from 'apollo-client'; //completly agnostic to react/angular etc
import {ApolloProvider} from 'react-apollo'; // here comes the react-wrapper "glue-layer"

import SongList from './components/SongList';


//------------------

const client = new ApolloClient({});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <section className="container">

                <h3>RANDOM HEADLINE</h3>

                <SongList />

            </section>
        </ApolloProvider>
    );
};

ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);

