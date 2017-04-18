import { connect } from 'react-redux';

import Thumbnail from '../components/Thumbnail';

function mapStateToProps(state) {
  return {
    user: state.selectedUser,
  };
}

const ThumbnailContainer = connect(mapStateToProps)(Thumbnail);

export default ThumbnailContainer;
