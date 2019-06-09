import React from 'react';

const Square = ({ gridSize: { height, width }, backgroundColor, children }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: `${100 / height}%`,
        width: `${100 / width}%`,
        backgroundColor: backgroundColor,
        color: '#fff',
        fontSize: 28,
      }}
    >
      {children}
    </div>
  );
};

export default Square;
