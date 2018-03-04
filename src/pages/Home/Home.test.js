import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Home from './Home.component';

describe('<Home>', () => {
  describe('addTrackToList', () => {
    it('should add next fixture to track list', () => {
      const props = {
        addTrack: jest.fn(),
        trackList: [
          {
            id: 1,
          },
        ],
      };

      const component = new Home(props);
      component.addTrackToList();

      expect(props.addTrack).toHaveBeenCalledWith({
        id: 2,
        name: 'Purple Haze',
        duration: 229,
        priority: false,
        artist: 'Jimi Hendrix',
        adder: {
          id: 1,
          name: 'kant',
          pictureUrl:
            'https://res.cloudinary.com/jukeo-net/image/upload/ano-b2_eezggd',
        },
        pictureUrl:
          'https://i.scdn.co/image/1d55f445789ed89a1b8fab09c3dad117afb5fe80',
        votes: {
          count: 0,
          userVoted: false,
        },
      });
    });

    it('should not add anything if all track have been added', () => {
      const props = {
        addTrack: jest.fn(),
        trackList: [
          {
            id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
          {
            id: 4,
          },
          {
            id: 5,
          },
          {
            id: 6,
          },
        ],
      };

      const component = new Home(props);
      component.addTrackToList();

      expect(props.addTrack).not.toHaveBeenCalled();
    });
  });
});
