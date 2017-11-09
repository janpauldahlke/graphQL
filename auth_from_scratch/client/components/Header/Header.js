import './../../styles/styles.css';
import React, {Component} from 'react';

import {graphql} from 'react-apollo';

import showUser from './../../queries/showUser';

class Header extends Component {

    render() {

        console.log(this.props);

        //todo apply conditional rendering to buttons depending on user state
        return(
            <div className="nav-wrapper valign-wrapper" style={{minHeight: "120px", backgroundColor: "#ee6e73"}}>

                    <div className="user-login" style={{width: "100%", textAlign : "right"}}>

                        {!this.props.user && (
                            <button className="waves-effect waves-light btn-large">Sign Up</button>
                        )}

                        {!this.props.user && (
                            <button className="waves-effect waves-light btn-large">Log In</button>
                        )}

                        {this.props.user && (
                            <button className="waves-effect waves-light btn-large">Log Out</button>
                        )}

                    </div>

            </div>
        );
    }
}

export default graphql(showUser)(Header);