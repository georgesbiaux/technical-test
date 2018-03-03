import React from 'react';
import { TrackItemCover } from 'components';
import StyledTrackItemInfo from './TrackItemInfo.style';

const TrackItemInfo = props => (
  <StyledTrackItemInfo className="track-info">
    <TrackItemCover pictureUrl={props.track.pictureUrl} />
    <div className="track-name-and-artist">
      <div className="track-name">
        {props.track.name}
      </div>
      <div className="track-artist">
        {props.track.artist}
      </div>
    </div>
  </StyledTrackItemInfo>
);

export default TrackItemInfo;
