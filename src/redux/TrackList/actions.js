import {
  TOGGLE_TRACK_PRIORITY,
  TOGGLE_USER_VOTE,
  ADD_TRACK,
} from './constants';

export function toggleTrackPriority(trackId) {
  return {
    type: TOGGLE_TRACK_PRIORITY,
    trackId,
  };
}

export function toggleUserVote(trackId) {
  return {
    type: TOGGLE_USER_VOTE,
    trackId,
  };
}

export function addTrack(track) {
  return {
    type: ADD_TRACK,
    track,
  };
}
