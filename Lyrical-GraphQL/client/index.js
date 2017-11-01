import React from 'react';
import ReactDOM from 'react-dom';

import ApolloClient from 'apollo-client'; //completly agnostic to react/angular etc
import {ApolloProvider} from 'react-apollo'; // here comes the react-wrapper "glue-layer"

const client = new ApolloClient({});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <div>Lyrical</div>
        </ApolloProvider>
    );
};

ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);

