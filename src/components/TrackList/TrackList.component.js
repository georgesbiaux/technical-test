import React from 'react';
import { TrackItem, EmptyTrackList } from 'components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import StyledTrackList from './TrackList.style';

const TrackList = props => {
  let timeBeforePlay = 240;
  const trackList = props.trackList.map((track, index) => {
    const item = (
      <CSSTransition {...props} timeout={250} classNames="fade" key={track.id}>
        <TrackItem
          track={track}
          timeBeforePlay={timeBeforePlay}
          style={{
            top: `${81 * index}px`,
            zIndex: props.trackList.length - index,
          }}
        />
      </CSSTransition>
    );

    timeBeforePlay += track.duration;
    return item;
  });

  return (
    <StyledTrackList
      className="track-list"
      style={{ height: props.trackList.length * 81 }}
    >
      {props.trackList.length > 0 ? (
        <TransitionGroup className="track-list-transition-group">
          {trackList}
        </TransitionGroup>
      ) : (
        <EmptyTrackList />
      )}
    </StyledTrackList>
  );
};

export default TrackList;
