import { connect } from 'react-redux';
import { addTrack } from 'redux/TrackList/actions';
import { toJS } from '../../services/immutable/toJs';
import Home from './Home.component';

function mapStateToProps(state) {
  return {
    trackList: state.trackList.get('tracks').toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTrack: track => dispatch(addTrack(track)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Home));
