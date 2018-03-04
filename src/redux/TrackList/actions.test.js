import {
  TOGGLE_TRACK_PRIORITY,
  TOGGLE_USER_VOTE,
  ADD_TRACK,
} from './constants';
import { toggleTrackPriority, toggleUserVote, addTrack } from './actions';

describe('TrackList actions', () => {
  describe('toggleTrackPriority', () => {
    it('should return the correct type and payload', () => {
      const expectedResult = {
        type: TOGGLE_TRACK_PRIORITY,
        trackId: 42,
      };

      expect(toggleTrackPriority(42)).toEqual(expectedResult);
    });
  });

  describe('toggleUserVote', () => {
    it('should return the correct type and payload', () => {
      const expectedResult = {
        type: TOGGLE_USER_VOTE,
        trackId: 42,
      };

      expect(toggleUserVote(42)).toEqual(expectedResult);
    });
  });

  describe('addTrack', () => {
    it('should return the correct type and payload', () => {
      const expectedResult = {
        type: ADD_TRACK,
        track: { id: 42 },
      };

      expect(addTrack({ id: 42 })).toEqual(expectedResult);
    });
  });
});
