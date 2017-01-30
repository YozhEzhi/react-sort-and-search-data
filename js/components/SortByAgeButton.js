import React, { Component } from 'react';

const SortByAgeButton = ({ update }) => {
  return (
    <button className="btn btn-default" onClick={update}>
      <i className="icon fa fa-sort-numeric-desc" /> Sort by age
    </button>
  );
};

export default SortByAgeButton;
