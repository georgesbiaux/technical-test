import { connect } from 'react-redux';
import { toJS } from '../../services/immutable/toJs';
import TrackList from './TrackList.component';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(toJS(TrackList));
