import React from 'react';
import SortByNameButton from './SortByNameButton';
import SortByAgeButton from './SortByAgeButton';

const Toolbar = ({ onFilterByName, onFilterByAge }) => {
  return (
    <div>
      <SortByNameButton onFilterByName={onFilterByName} />
      <SortByAgeButton onFilterByAge={onFilterByAge} />
    </div>
  );
};

export default Toolbar;
