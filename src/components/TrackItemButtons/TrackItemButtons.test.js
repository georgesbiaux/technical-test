import React from 'react';
import { shallow } from 'enzyme';
import TrackItemButtons from './TrackItemButtons.component';

describe('<TrackItemButtons>', () => {
  let props;

  beforeEach(() => {
    props = {
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
      toggleTrackPriority: jest.fn(),
      toggleUserVote: jest.fn(),
    };
  });

  it('should toggle track priority when clicking the button', () => {
    const tree = shallow(<TrackItemButtons {...props} />);
    tree.find('Button').prop('onClick')();
    expect(props.toggleTrackPriority).toHaveBeenCalledWith(1);
  });

  it('should toggle track votes when clicking the button', () => {
    const tree = shallow(<TrackItemButtons {...props} />);
    tree.find('VoteButton').prop('onClick')();
    expect(props.toggleUserVote).toHaveBeenCalledWith(1);
  });
});
