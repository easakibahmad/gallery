import React from 'react';

const TickComponent = ( { className } ) =>
{
    return (
      <div
        className={`bg-green-500 text-white p-1 ${className}`}
      >
        <span className="relative">✔</span>
      </div>
    );
};

export default TickComponent;