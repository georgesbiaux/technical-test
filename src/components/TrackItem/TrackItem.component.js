import React from 'react';
import { FormattedMessage } from 'react-intl';
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
      <div className="track-footer">
        <div className="added-by">
          {props.track.adder && <FormattedMessage
            id="trackItem.addedBy"
            values={{
              username: props.track.adder.name,
            }}
          />}
        </div>
        <div className="time-before-play">
          <FormattedMessage
            id="trackItem.in"
            values={{
              duration: 4,
            }}
          />
        </div>
      </div>
    </div>
  </StyledTrackItem>
);

export default TrackItem;
