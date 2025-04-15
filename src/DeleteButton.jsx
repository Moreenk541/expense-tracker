import React from 'react';

const DeleteButton = ({ onDelete }) => {
  return (
    <button onClick={onDelete} style={{ backgroundColor: 'black', color: 'white' }}>
      Delete
    </button>
  );
};

export default DeleteButton;
