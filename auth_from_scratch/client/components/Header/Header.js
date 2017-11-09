import './../../styles/styles.css';
import React, {Component} from 'react';

class Header extends Component {

    render() {

        return(
            <div className="nav-wrapper valign-wrapper" style={{minHeight: "120px", backgroundColor: "#ee6e73"}}>

                    <div className="user-login" style={{width: "100%", textAlign : "right"}}>
                        <button className="waves-effect waves-light btn-large">Sign Up</button>
                        <button className="waves-effect waves-light btn-large">Log In</button>
                    </div>

            </div>
        );
    }
}

export default Header;