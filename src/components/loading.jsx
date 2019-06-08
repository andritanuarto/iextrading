import React from 'react';

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner">
        <div className="rect1" />
        <div className="rect2" />
        <div className="rect3" />
        <div className="rect4" />
        <div className="rect5" />
      </div>
    </div>
  );
}

export default Loading;