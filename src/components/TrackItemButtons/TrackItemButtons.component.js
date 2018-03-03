import React from 'react';
import { PriorityButton } from 'components';
import StyledTrackItemButtons from './TrackItemButtons.style';

const TrackItemButtons = props => (
  <StyledTrackItemButtons className="track-item-button">
    <PriorityButton priority={props.track.priority} />
  </StyledTrackItemButtons>
);

export default TrackItemButtons;
