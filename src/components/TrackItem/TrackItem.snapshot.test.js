import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import TrackItem from './TrackItem.component';

describe('<TrackItem>', () => {
  it('should render correctly when priority is false', () => {
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
    const tree = shallow(<TrackItem {...props} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });

  it('should render correctly when priority is true', () => {
    const props = {
      track: {
        id: 1,
        name: 'Beast Of Burden',
        duration: 211,
        priority: true,
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
    const tree = shallow(<TrackItem {...props} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
