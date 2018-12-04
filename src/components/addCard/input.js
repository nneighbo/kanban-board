import React from 'react';
// reuseable basic input form field no styling only prop handling
export const Input = props => (
  <div>
    <input { ...props } />
  </div>
);
