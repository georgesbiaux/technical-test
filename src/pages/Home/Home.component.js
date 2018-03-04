import React, { Component } from 'react';
import trackFictures from 'trackFixtures';
import { TrackList } from 'components';
import StyledHome from './Home.style';

export default class Home extends Component {
  componentWillMount() {
    this.props.addTrack(trackFictures[0]);
  }

  render() {
    return (
      <StyledHome>
        <TrackList trackList={this.props.trackList} />
      </StyledHome>
    );
  };
}
