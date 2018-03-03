import React from 'react';
import { render } from 'enzyme';
import toJSON from 'enzyme-to-json';
import TrackItemCover from './TrackItemCover.component';

describe('<TrackItemCover>', () => {
  it('should render correctly', () => {
    const props = {
      pictureUrl:
        'https://i.scdn.co/image/adcf79a6adae4e1a44d0e34860cc103e28ee4372',
    };
    const tree = render(<TrackItemCover {...props} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
