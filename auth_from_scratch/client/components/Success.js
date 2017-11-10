import React, {Component} from 'react';
import {Link} from 'react-router';

class Success extends Component{

    render(){
        return(
            <div className="success">
                <h5>you have signed up successfully</h5>
                <Link
                    className=""
                    to="/dashboard" >Goto DashBoard</Link>
            </div>
        )
    }
}

export default Success;