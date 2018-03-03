import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import TrackList from './TrackList.component';

describe('<TrackList>', () => {
  it('should render correctly', () => {
    const props = {
      children: <div>
        <span>test</span>
      </div>
    };
    const tree = shallow(<TrackList {...props} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
