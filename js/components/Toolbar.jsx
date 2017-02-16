import React from 'react';
import SortByAgeButton from './SortByAgeButton';
import SortByNameButton from './SortByNameButton';

const Toolbar = ({ icoClass, onSortByAge, onSortByName }) => {
  return (
    <div>
      <SortByNameButton icoClass={icoClass} onSortByName={onSortByName} />
      <SortByAgeButton icoClass={icoClass} onSortByAge={onSortByAge} />
    </div>
  );
};

Toolbar.propTypes = {
  icoClass: React.PropTypes.string,
  onSortByAge: React.PropTypes.func.isRequired,
  onSortByName: React.PropTypes.func.isRequired,
};

Toolbar.defaultProps = {
  icoClass: 'asc',
};

export default Toolbar;
