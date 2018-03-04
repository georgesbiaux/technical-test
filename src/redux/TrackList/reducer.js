// @flow

import { fromJS } from 'immutable';
import { TOGGLE_TRACK_PRIORITY, TOGGLE_USER_VOTE } from './constants';

const initialState = fromJS({
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

function sortTracks(trackA, trackB) {
  if (trackA.priority && !trackB.priority) {
    return -1;
  } else if (trackB.priority && !trackA.priority) {
    return 1;
  }

  if (trackA.votes.count > trackB.votes.count) {
    return -1;
  } else if (trackB.votes.count > trackA.votes.count) {
    return 1;
  }

  if (trackA.id < trackB.id) {
    return -1;
  } else if (trackB.id < trackA.id) {
    return 1;
  }

  return 0;
}

export default function reducer(
  state: Map<string, any> = initialState,
  action: { type: string, payload: Object },
) {
  switch (action.type) {
    case TOGGLE_TRACK_PRIORITY: {
      const tracks = state.get('tracks').toJS();
      const trackIndex = tracks.findIndex(track => track.id === action.trackId);

      tracks[trackIndex].priority = !tracks[trackIndex].priority;

      return state.set('tracks', fromJS(tracks.sort(sortTracks)));
    }
    case TOGGLE_USER_VOTE: {
      const tracks = state.get('tracks').toJS();
      const trackIndex = tracks.findIndex(track => track.id === action.trackId);

      if (tracks[trackIndex].votes.count === 0) {
        tracks[trackIndex].votes.userVoted = true;
      }

      tracks[trackIndex].votes.count += 1;

      return state.set('tracks', fromJS(tracks.sort(sortTracks)));
    }
    default:
      return state;
  }
}
