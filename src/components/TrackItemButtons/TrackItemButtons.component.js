import React from 'react';
import { PriorityButton, VoteButton } from 'components';
import StyledTrackItemButtons from './TrackItemButtons.style';

const TrackItemButtons = props => (
  <StyledTrackItemButtons className="track-item-button">
    <PriorityButton priority={props.track.priority} />
    <VoteButton
      votes={props.track.votes.count}
      userVoted={props.track.votes.userVoted}
    />
  </StyledTrackItemButtons>
);

export default TrackItemButtons;
