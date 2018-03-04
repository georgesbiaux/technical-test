import { connect } from 'react-redux';
import {
  toggleTrackPriority,
  toggleUserVote,
  removeTrack,
} from 'redux/TrackList/actions';
import { toJS } from '../../services/immutable/toJs';
import TrackItemButtons from '../TrackItemButtons/TrackItemButtons.component';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTrackPriority: trackId => dispatch(toggleTrackPriority(trackId)),
    toggleUserVote: trackId => dispatch(toggleUserVote(trackId)),
    removeTrack: trackId => dispatch(removeTrack(trackId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  toJS(TrackItemButtons),
);
