import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: 'Search people by name...',
      term: '',
    };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onFilter(term);
  }

  render() {
    return (
      <div className="form-group">
        <input
          className="search-bar form-control"
          onChange={event => this.onInputChange(event.target.value)}
          placeholder={this.state.placeholder}
        />
      </div>
    );
  }
}

export default SearchBar;
