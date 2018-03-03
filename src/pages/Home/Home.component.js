import React, { Component } from 'react';
import { TrackList } from 'components';
import StyledHome from './Home.style';

export default class Home extends Component {
  render() {
    return (
      <StyledHome>
        <TrackList />
      </StyledHome>
    );
  };
}
