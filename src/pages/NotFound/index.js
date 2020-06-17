import React from 'react';

const NotFound = (props) => {
  const errorMessage = props.errorMessage || 404;
  return (
    <h1>
      {errorMessage}
    </h1>
  )
}

export default NotFound;