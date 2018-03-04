import React from 'react';
import { Button, VoteButton } from 'components';
import StyledTrackItemButtons from './TrackItemButtons.style';

const TrackItemButtons = props => (
  <StyledTrackItemButtons className="track-item-button">
    <Button
      icon="fa-bars"
      priority={props.track.priority}
      onClick={() => props.toggleTrackPriority(props.track.id)}
    />
    <VoteButton
      votes={props.track.votes.count}
      userVoted={props.track.votes.userVoted}
      onClick={() => props.toggleUserVote(props.track.id)}
    />
    <Button
      icon="fa-trash"
      priority={props.track.priority}
      onClick={() => props.removeTrack(props.track.id)}
    />
  </StyledTrackItemButtons>
);

export default TrackItemButtons;
