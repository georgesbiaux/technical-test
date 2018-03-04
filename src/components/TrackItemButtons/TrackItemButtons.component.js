import React from 'react';
import { PriorityButton, VoteButton } from 'components';
import StyledTrackItemButtons from './TrackItemButtons.style';

const TrackItemButtons = props => (
  <StyledTrackItemButtons className="track-item-button">
    <PriorityButton
      priority={props.track.priority}
      onClick={() => props.toggleTrackPriority(props.track.id)}
    />
    <VoteButton
      votes={props.track.votes.count}
      userVoted={props.track.votes.userVoted}
      onClick={() => props.toggleUserVote(props.track.id)}
    />
  </StyledTrackItemButtons>
);

export default TrackItemButtons;
