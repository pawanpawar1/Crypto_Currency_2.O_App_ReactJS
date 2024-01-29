import React from 'react';

const Loader = () => {
  return (
    <div className="h-90vh flex items-center justify-center">
      <div className="transform scale-150">
        <div className="spinner">...Loading</div>
      </div>
    </div>
  );
};

export default Loader;
