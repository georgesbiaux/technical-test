import React from 'react';
import StyledTrackItemPriorityOverlay from './TrackItemPriorityOverlay.style';

const TrackItemPriorityOverlay = () => (
  <StyledTrackItemPriorityOverlay className="track-priority-overlay">
    <div className="priority-icon-container">
      <i className="priority-icon fa fa-share" />
    </div>
    <div className="bottom-border" />
  </StyledTrackItemPriorityOverlay>
);

export default TrackItemPriorityOverlay;
