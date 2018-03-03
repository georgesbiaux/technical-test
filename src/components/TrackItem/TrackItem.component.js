import React from 'react';
import { TrackItemFooter, TrackItemUserIcon, TrackItemInfo } from 'components';
import StyledTrackItem from './TrackItem.style';

const TrackItem = props => (
  <StyledTrackItem className="track-item">
    <TrackItemUserIcon pictureUrl={props.track.adder.pictureUrl} />
    <div className="track-container">
      <div className="track-row">
        <TrackItemInfo track={props.track} />
      </div>
      <TrackItemFooter track={props.track} />
    </div>
  </StyledTrackItem>
);

export default TrackItem;
