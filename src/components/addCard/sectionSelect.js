import React from 'react';
// reuseable basic radio buttons no styling only prop handling
export const sectionSelect = props => (
    <div>
      <input { ...props } /> 
    </div>
);