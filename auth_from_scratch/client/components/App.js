import React, {Component} from 'react';

import Header from './Header/Header.js';

class App extends Component{

    render() {
        return (
            <div>
                <Header/>
                app body
                {this.props.children}
            </div>
        );
    }
}

export default App;