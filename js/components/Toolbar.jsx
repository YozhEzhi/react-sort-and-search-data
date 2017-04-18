import React from 'react';

import SortAgeButton from './SortAgeButton';
import SortNameButton from './SortNameButton';

const Toolbar = (props) => {
  const { onSortByAge, onSortByName, sortedByAge, sortedByName } = props;

  return (
    <div>
      <SortNameButton iconClass={sortedByName} onSortByName={onSortByName} />
      <SortAgeButton iconClass={sortedByAge} onSortByAge={onSortByAge} />
    </div>
  );
};

export default Toolbar;
