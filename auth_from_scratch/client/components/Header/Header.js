import './../../styles/styles.css';
import React, {Component} from 'react';
import {Link} from 'react-router';
import {graphql, compose} from 'react-apollo';

import showUserQuery from './../../queries/showUser';
import logoutUserMutation from '../../mutations/logoutUser';
import loginUserMutation from './../../mutations/loginUser';


class Header extends Component {

    onLogoutClick(){
        this.props.mutate({refetchQueries: [{query: showUserQuery}]}) // fetchagain style is bad? // no its ok here
    }

    onLoginClick(){
        //
    }

    renderButtons(){

        const {user} = this.props.data

        if(this.props.showUser){
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
        return(

            <div className="nav-wrapper valign-wrapper" style={{minHeight: "120px", backgroundColor: "#ee6e73"}}>
                <Link to="/" className="btn">Home</Link>
                <div className="user-login" style={{width: "100%", textAlign : "right"}}>
                    {/*<Link to="/" className="brand-logo left btn" >Home</Link>*/}
                    {this.renderButtons()}
                </div>

            </div>
        );
    }
}

export default graphql(logoutUserMutation)(
    graphql(showUserQuery)(Header)
);

// const HeaderWithMutations = compose(
//     graphql(showUserQuery, {name: 'showUser'}),
//     graphql(logoutUserMutation, {name: 'logout'}),
//     graphql(loginUserMutation, {name : 'login'})
//
// )(Header);
//
// export default HeaderWithMutations;
