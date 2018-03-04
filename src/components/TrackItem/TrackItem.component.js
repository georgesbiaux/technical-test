import React from 'react';
import {
  TrackItemFooter,
  TrackItemUserIcon,
  TrackItemInfo,
  TrackItemPriorityOverlay,
  TrackItemButtons,
} from 'components';
import StyledTrackItem from './TrackItem.style';

const TrackItem = props => (
  <StyledTrackItem className="track-item">
    <TrackItemUserIcon pictureUrl={props.track.adder.pictureUrl} />
    <div className="track-container">
      <div className="track-row">
        <TrackItemInfo track={props.track} />
        <TrackItemButtons track={props.track} />
      </div>
      <TrackItemFooter
        track={props.track}
        timeBeforePlay={props.timeBeforePlay}
      />
    </div>
    {props.track.priority && <TrackItemPriorityOverlay />}
  </StyledTrackItem>
);

export default TrackItem;
