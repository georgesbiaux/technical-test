import React, { Component } from 'react';
import trackFictures from 'trackFixtures';
import { TrackList, Button } from 'components';
import StyledHome from './Home.style';

export default class Home extends Component {
  componentWillMount() {
    this.props.addTrack(trackFictures[0]);
    this.props.addTrack(trackFictures[1]);
  }

  addTrackToList = () => {
    const addedTrackIds = this.props.trackList.map(track => track.id);
    const nextTrackIndex = trackFictures.findIndex(
      track => !addedTrackIds.includes(track.id),
    );

    if (nextTrackIndex !== -1) {
      this.props.addTrack(trackFictures[nextTrackIndex]);
    }
  };

  render() {
    return (
      <StyledHome>
        <TrackList trackList={this.props.trackList} />
        <div>
          <Button icon="fa-plus" onClick={this.addTrackToList} />
        </div>
      </StyledHome>
    );
  }
}
