import React from 'react';
import { render } from 'enzyme';
import toJSON from 'enzyme-to-json';
import TrackItemButtons from './TrackItemButtons.component';

describe('<TrackItemButtons>', () => {
  it('should render correctly', () => {
    const props = {
      track: {
        id: 1,
        name: 'Beast Of Burden',
        duration: 211,
        priority: false,
        artist: 'The Rolling Stones',
        adder: {
          id: 1,
          name: 'kant',
          pictureUrl:
            'https://res.cloudinary.com/jukeo-net/image/upload/ano-b2_eezggd',
        },
        pictureUrl:
          'https://i.scdn.co/image/adcf79a6adae4e1a44d0e34860cc103e28ee4372',
        votes: {
          count: 0,
          userVoted: false,
        },
      },
    };
    const tree = render(<TrackItemButtons {...props} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
