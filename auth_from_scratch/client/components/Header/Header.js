import './../../styles/styles.css';
import React, {Component} from 'react';

import {graphql} from 'react-apollo';
import {isNullOrUndefined} from "util";

import showUser from './../../queries/showUser';


class Header extends Component {


    renderButtons(){

        const {user} = this.props.data

        if(this.props.data.loading){
            return(
                <div></div>
            )
        }

        if(user){
            return(
                <button className="waves-effect waves-light btn-large">Log Out</button>
            )
        }
        else{
           return(
               <div>
                   <button className="waves-effect waves-light btn-large">Sign Up</button>
                   <button className="waves-effect waves-light btn-large">Log In</button>
               </div>
           );
        }
    }


    render() {

        return(

            <div className="nav-wrapper valign-wrapper" style={{minHeight: "120px", backgroundColor: "#ee6e73"}}>

                <div className="user-login" style={{width: "100%", textAlign : "right"}}>
                    {this.renderButtons()}
                </div>

            </div>
        );
    }
}

export default graphql(showUser)(Header);