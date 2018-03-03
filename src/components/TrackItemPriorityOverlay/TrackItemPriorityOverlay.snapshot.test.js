import React from 'react';
import { render } from 'enzyme';
import toJSON from 'enzyme-to-json';
import TrackItemPriorityOverlay from './TrackItemPriorityOverlay.component';

describe('<TrackItemPriorityOverlay>', () => {
  it('should render correctly', () => {
    const tree = render(<TrackItemPriorityOverlay />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
