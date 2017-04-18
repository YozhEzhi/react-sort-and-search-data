import React from 'react';

function SortNameButton(props) {
  return (
    <button className="btn btn-default" onClick={props.onSortByName}>
      <i className={`icon fa fa-sort-alpha-${props.iconClass}`} /> Sort by name
    </button>
  );
}

export default SortNameButton;
