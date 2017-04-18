import React from 'react';

function SortAgeButton(props) {
  return (
    <button className="btn btn-default" onClick={props.onSortByAge}>
      <i className={`icon fa fa-sort-numeric-${props.iconClass}`} /> Sort by age
    </button>
  );
}

export default SortAgeButton;
