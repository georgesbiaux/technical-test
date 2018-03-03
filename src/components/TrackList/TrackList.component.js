import React from 'react';
import { TrackItem } from 'components';
import StyledTrackList from './TrackList.style';

const TrackList = props => (
  <StyledTrackList className="track-list">
    {props.trackList.map(track => <TrackItem key={track.id} track={track} />)}
  </StyledTrackList>
);

export default TrackList;
