import { connect } from 'react-redux';
import { toJS } from '../../services/immutable/toJs';
import Home from './Home.component';

function mapStateToProps(state) {
  return {
    trackList: state.trackList.get('tracks').toJS(),
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Home));
