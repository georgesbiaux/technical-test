import { connect } from 'react-redux';
import { addTrack } from 'redux/TrackList/actions';
import { toJS } from '../../services/immutable/toJs';
import Root from './Root.component';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addTrack: track => dispatch(addTrack(track)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Root));
