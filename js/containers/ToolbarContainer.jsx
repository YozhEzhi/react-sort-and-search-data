import { connect } from 'react-redux';

import { sortByName, sortByAge } from '../actions';
import Toolbar from '../components/Toolbar';

function mapStateToProps(state) {
  return {
    sortedByAge: state.sortedByAge,
    sortedByName: state.sortedByName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSortByName: () => dispatch(sortByName()),
    onSortByAge: () => dispatch(sortByAge()),
  };
}

const ToolbarContainer = connect(mapStateToProps, mapDispatchToProps)(Toolbar);

export default ToolbarContainer;
