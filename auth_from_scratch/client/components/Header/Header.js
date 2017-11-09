import './../../styles/styles.css';
import React, {Component} from 'react';

import {graphql} from 'react-apollo';
import {isNullOrUndefined} from "util";

import showUser from './../../queries/showUser';


class Header extends Component {

    render() {

        if(this.props.data.loading){
            return (
                <div></div>
            )
        }

        return(

            <div className="nav-wrapper valign-wrapper" style={{minHeight: "120px", backgroundColor: "#ee6e73"}}>

                <div className="user-login" style={{width: "100%", textAlign : "right"}}>


                    {(isNullOrUndefined(this.props.data.user)) && (
                        <button className="waves-effect waves-light btn-large">Sign Up</button>
                    )}

                    {(isNullOrUndefined(this.props.data.user)) && (
                        <button className="waves-effect waves-light btn-large">Log In</button>
                    )}

                    {(!isNullOrUndefined(this.props.data.user)) && (
                        <button className="waves-effect waves-light btn-large">Log Out</button>
                    )}

                </div>

            </div>
        );
    }
}

export default graphql(showUser)(Header);