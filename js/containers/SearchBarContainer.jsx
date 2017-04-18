import { connect } from 'react-redux';

import { filterUsers } from '../actions';
import SearchBar from '../components/SearchBar';

function mapDispatchToProps(dispatch) {
  return {
    onFilter: term => dispatch(filterUsers(term)),
  };
}

const SearchBarContainer = connect(null, mapDispatchToProps)(SearchBar);

export default SearchBarContainer;
