import React, {Component} from 'react'

class Welcome extends Component{



    render(){

        console.log('welcome props', this.props)

        return(
            <div className="welcome">
                iam welcome
            </div>
        );
    }
}

export default Welcome;