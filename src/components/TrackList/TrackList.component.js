import React from 'react';
import StyledTrackList from './TrackList.style';

const TrackList = props => (
  <StyledTrackList className="track-list">
    {props.trackList.map(track => (
      <div key={track.id}>{track.id}</div>
    ))}
  </StyledTrackList>
);

export default TrackList;
