import React from 'react';
// reuseable basic form submit button no styling only prop handling
export const FormBtn = props => (
  <button { ...props }>
    { props.children }
  </button>
);
