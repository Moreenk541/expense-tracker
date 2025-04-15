import React from 'react';

const SortControl = ({ onSort }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label>Sort By: </label>
      <select onChange={(e) => onSort(e.target.value)}>
        <option value="">-- Select --</option>
        <option value="category">Category</option>
        <option value="description">Description</option>
      </select>
    </div>
  );
};

export default SortControl;
