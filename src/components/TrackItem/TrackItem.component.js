import React from 'react';
import { TrackItemFooter, TrackItemUserIcon } from 'components';
import StyledTrackItem from './TrackItem.style';

const TrackItem = props => (
  <StyledTrackItem className="track-item">
    <TrackItemUserIcon pictureUrl={props.track.adder.pictureUrl} />
    <div className="track-container">
      <div className="track-row">
      </div>
      <TrackItemFooter track={props.track} />
    </div>
  </StyledTrackItem>
);

export default TrackItem;
