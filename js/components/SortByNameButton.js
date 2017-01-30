import React, { Component } from 'react';

class SortByNameButton extends Component {
  constructor(props) {
    super(props);

    this.toggleClass = this.toggleClass.bind(this);

    this.sortClasses = [
      'icon fa fa-sort-alpha-asc',
      'icon fa fa-sort-alpha-desc',
    ];

    this.state = {
      iconClass: this.sortClasses[0],
    };
  }

  toggleClass() {
    const classes = this.state.iconClass;
    const iconClass = classes.includes('asc') ? this.sortClasses[1] : this.sortClasses[0];
    this.setState({ iconClass });
  }

  render() {
    return (
      <button className="btn btn-default" onClick={this.toggleClass}>
        <i className={this.state.iconClass} /> Sort by name
      </button>
    );
  }
}

export default SortByNameButton;
