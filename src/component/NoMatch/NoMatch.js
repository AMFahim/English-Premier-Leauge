import React from 'react';

const NoMatch = () => {
  const setStyle ={
    textAlign: 'center',
    marginTop: '100px'
  }
  return (
    <div style={setStyle}>
      <h1 className="display-1">Route Not Found</h1>
      <h2 className="display-2">404</h2>
    </div>
  );
};

export default NoMatch;