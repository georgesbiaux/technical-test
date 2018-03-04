import { connect } from 'react-redux';
import { toggleTrackPriority, toggleUserVote } from 'redux/TrackList/actions';
import { toJS } from '../../services/immutable/toJs';
import TrackItemButtons from '../TrackItemButtons/TrackItemButtons.component';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTrackPriority: trackId => dispatch(toggleTrackPriority(trackId)),
    toggleUserVote: trackId => dispatch(toggleUserVote(trackId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  toJS(TrackItemButtons),
);
