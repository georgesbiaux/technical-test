import React from 'react';
import { FormattedMessage } from 'react-intl';
import { TrackItemFooter } from 'components';
import StyledTrackItem from './TrackItem.style';
import UserIcon from './user-icon.png';

const TrackItem = props => (
  <StyledTrackItem className="track-item">
    <div className="user-icon-container">
      <img
        className="user-icon"
        src={props.track.adder ? props.track.adder.pictureUrl : UserIcon}
        alt="User icon"
      />
    </div>
    <div className="track-container">
      <div className="track-row">
      </div>
      <TrackItemFooter track={props.track} />
    </div>
  </StyledTrackItem>
);

export default TrackItem;
