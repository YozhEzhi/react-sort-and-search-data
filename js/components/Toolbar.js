import React from 'react';
import SortByAgeButton from './SortByAgeButton';
import SortByNameButton from './SortByNameButton';

const Toolbar = ({ icoClass, onFilterByAge, onFilterByName }) => {
  return (
    <div>
      <SortByNameButton icoClass={icoClass} onFilterByName={onFilterByName} />
      <SortByAgeButton icoClass={icoClass} onFilterByAge={onFilterByAge} />
    </div>
  );
};

Toolbar.propTypes = {
  icoClass: React.PropTypes.string,
  onFilterByAge: React.PropTypes.func.isRequired,
  onFilterByName: React.PropTypes.func.isRequired,
};

Toolbar.defaultProps = {
  icoClass: 'asc',
};

export default Toolbar;
