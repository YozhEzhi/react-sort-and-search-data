import React, { Component } from 'react';

class SortByNameButton extends Component {
  constructor(props) {
    super(props);

    this.icoDefaultClass = 'asc';
    this.state = {
      iconClass: props.icoClass || this.icoDefaultClass,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onSortByName();
    this.setState({
      iconClass: this.props.icoClass || this.icoDefaultClass,
    });
  }

  render() {
    return (
      <button className="btn btn-default" onClick={this.handleClick}>
        <i className={`icon fa fa-sort-alpha-${this.state.iconClass}`} /> Sort by name
      </button>
    );
  }
}

SortByNameButton.propTypes = {
  icoClass: React.PropTypes.string,
  onSortByName: React.PropTypes.func.isRequired,
};

SortByNameButton.defaultProps = {
  icoClass: 'asc',
};

export default SortByNameButton;
