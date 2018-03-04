// @flow

import { fromJS } from 'immutable';
import {
  TOGGLE_TRACK_PRIORITY,
  TOGGLE_USER_VOTE,
  ADD_TRACK,
  REMOVE_TRACK,
} from './constants';

const initialState = fromJS({
  tracks: [],
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
    case REMOVE_TRACK: {
      const tracks = state.get('tracks').toJS();
      const trackIndex = tracks.findIndex(track => track.id === action.trackId);

      tracks.splice(trackIndex, 1);

      return state.set('tracks', fromJS(tracks.sort(sortTracks)));
    }
    case ADD_TRACK: {
      const tracks = state.get('tracks').toJS();
      tracks.push(action.track);

      return state.set('tracks', fromJS(tracks.sort(sortTracks)));
    }
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
