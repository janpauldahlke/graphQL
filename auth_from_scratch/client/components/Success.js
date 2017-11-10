import React, {Component} from 'react';
import {Link} from 'react-router';

class Success extends Component{

    render(){
        return(
            <div className="success">

                <div>you have signed up successfully and can now enter dashboard</div>

                <Link
                    className="btn"
                    to="/dashboard" >Goto DashBoard</Link>
            </div>
        )
    }
}

export default Success;