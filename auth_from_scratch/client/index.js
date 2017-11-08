import React from 'react';
import ReactDOM from 'react-dom';

const Root = () => {

  console.log(this);

  return (
    <div>
      Auth Starter
    </div>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
