import React, { Component } from 'react';

class SortByNameButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.sortClasses = [
      'icon fa fa-sort-alpha-asc',
      'icon fa fa-sort-alpha-desc',
    ];

    this.state = {
      iconClass: this.sortClasses[0],
    };
  }

  handleClick() {
    const classes = this.state.iconClass;
    const iconClass = classes.includes('asc') ? this.sortClasses[1] : this.sortClasses[0];
    this.setState({ iconClass });
    this.props.onFilterByName();
  }

  render() {
    return (
      <button className="btn btn-default" onClick={this.handleClick}>
        <i className={this.state.iconClass} /> Sort by name
      </button>
    );
  }
}

export default SortByNameButton;
