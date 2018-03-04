import React from 'react';
import { TrackItem } from 'components';
import StyledTrackList from './TrackList.style';

const TrackList = props => {
  let timeBeforePlay = 240;
  const trackList = props.trackList.map(track => {
    const item = (
      <TrackItem key={track.id} track={track} timeBeforePlay={timeBeforePlay} />
    );

    timeBeforePlay += track.duration;
    return item;
  });

  return <StyledTrackList className="track-list">{trackList}</StyledTrackList>;
};

export default TrackList;
