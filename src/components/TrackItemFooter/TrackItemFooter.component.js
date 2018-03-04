import React from 'react';
import { FormattedMessage } from 'react-intl';
import StyledTrackItemFooter from './TrackItemFooter.style';

const TrackItemFooter = props => (
  <StyledTrackItemFooter className="track-footer">
    <div className="added-by">
      <FormattedMessage
        id="trackItem.addedBy"
        values={{
          username: props.track.adder.name,
        }}
      />
    </div>
    <div className="time-before-play">
      <FormattedMessage
        id="trackItem.in"
        values={{
          duration: Math.ceil(props.timeBeforePlay / 60),
        }}
      />
    </div>
  </StyledTrackItemFooter>
);

export default TrackItemFooter;
