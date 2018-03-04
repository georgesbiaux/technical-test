import { fromJS } from 'immutable';
import trackListReducer from './reducer';
import { TOGGLE_TRACK_PRIORITY, TOGGLE_USER_VOTE } from './constants';

describe('track list Reducer', () => {
  let previousState;
  beforeEach(() => {
    previousState = fromJS({
      tracks: [{ id: 1 }],
    });
  });

  it('should return the initial state if no state is passed', () => {
    expect(trackListReducer(undefined, { type: 'fake' })).toEqual(
      fromJS({
        tracks: [],
      }),
    );
  });

  it('should return previous state if a default action is passed', () => {
    expect(trackListReducer(previousState, { type: 'dummy' })).toEqual(
      previousState,
    );
  });

  it('should toggle track priority and reorder track list', () => {
    let state = fromJS({
      tracks: [
        {
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
        {
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
        },
      ],
    });

    state = trackListReducer(state, {
      type: TOGGLE_TRACK_PRIORITY,
      trackId: 1,
    });

    expect(state).toEqual(
      fromJS({
        tracks: [
          {
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
          {
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
          },
        ],
      }),
    );

    state = trackListReducer(state, {
      type: TOGGLE_TRACK_PRIORITY,
      trackId: 1,
    });

    state = trackListReducer(state, {
      type: TOGGLE_TRACK_PRIORITY,
      trackId: 2,
    });

    expect(state).toEqual(
      fromJS({
        tracks: [
          {
            id: 2,
            name: 'Purple Haze',
            duration: 229,
            priority: true,
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
          },
          {
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
        ],
      }),
    );

    state = trackListReducer(state, {
      type: TOGGLE_TRACK_PRIORITY,
      trackId: 2,
    });

    expect(state).toEqual(
      fromJS({
        tracks: [
          {
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
          {
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
          },
        ],
      }),
    );
  });

  it('should increase track votes and reorder track list', () => {
    let state = fromJS({
      tracks: [
        {
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
        {
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
        },
      ],
    });

    state = trackListReducer(state, {
      type: TOGGLE_USER_VOTE,
      trackId: 1,
    });

    expect(state).toEqual(
      fromJS({
        tracks: [
          {
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
              count: 1,
              userVoted: true,
            },
          },
          {
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
          },
        ],
      }),
    );

    state = trackListReducer(state, {
      type: TOGGLE_USER_VOTE,
      trackId: 2,
    });

    expect(state).toEqual(
      fromJS({
        tracks: [
          {
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
              count: 1,
              userVoted: true,
            },
          },
          {
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
              count: 1,
              userVoted: true,
            },
          },
        ],
      }),
    );

    state = trackListReducer(state, {
      type: TOGGLE_USER_VOTE,
      trackId: 2,
    });

    expect(state).toEqual(
      fromJS({
        tracks: [
          {
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
              count: 2,
              userVoted: true,
            },
          },
          {
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
              count: 1,
              userVoted: true,
            },
          },
        ],
      }),
    );
  });
});
