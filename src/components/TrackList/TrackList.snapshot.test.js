import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import TrackList from './TrackList.component';

describe('<TrackList>', () => {
  it('should render correctly', () => {
    const props = {
      trackList: [{
        id: 1,
        duration: 500,
      }, {
        id: 2,
      }],
    };
    const tree = shallow(<TrackList {...props} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });

  it('should render correctly when tracklist is empty', () => {
    const props = {
      trackList: [],
    };
    const tree = shallow(<TrackList {...props} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
