import React from 'react';


//desctructuter children in top level parent
export default ({children}) => {

    return <div className="container">
        {children}
    </div>
}