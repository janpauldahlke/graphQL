import React, {Component} from 'react';

// export default ({children}) => {
//
//     return <div className="container">
//         here is app
//         {children}
//     </div>
// }

class App extends Component{

    render() {
        return (
            <div>

                class Based App
                {this.props.children}
            </div>
        );
    }
}

export default App;