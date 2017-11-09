import './../../styles/styles.css';
import React, {Component} from 'react';
import {Link} from 'react-router';
import {graphql} from 'react-apollo';

import showUser from './../../queries/showUser';
import logOutUser from '../../mutations/logoutUser';


class Header extends Component {

    onLogoutClick(){
        this.props.mutate({refetchQueries: [{query: showUser}]}) // fetchagain style is bad? // no its ok here
        // no query variables, so simply call it
    }

    renderButtons(){

        const {user} = this.props.data

        if(this.props.data.loading){
            return(
                <div></div>
            )
        }

        if(user){
            return(
                <a
                onClick={this.onLogoutClick.bind(this)}
                className="waves-effect waves-light btn-large">Log Out</a>
            )
        }
        else{
           return(
               <div>
                   <Link to="/signup" className="waves-effect waves-light btn-large">Sign Up</Link>
                   <Link to="/login" className="waves-effect waves-light btn-large">Log In</Link>
               </div>
           );
        }
    }


    render() {

        console.log(this.props)


        return(

            <div className="nav-wrapper valign-wrapper" style={{minHeight: "120px", backgroundColor: "#ee6e73"}}>

                <div className="user-login" style={{width: "100%", textAlign : "right"}}>
                    {/*<Link to="/" className="brand-logo left btn" >Home</Link>*/}
                    {this.renderButtons()}
                </div>

            </div>
        );
    }
}

export default graphql(logOutUser)(
    graphql(showUser)(Header)
);