import styled from 'styled-components';

const StyledTrackList = styled.div`
  position: relative;

  .track-list-transition-group {
    position: relative;
  }

  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 200ms ease-in;
  }

  .track-item {
    position: absolute;
    right: 0;
    left: 0;
    transition: top 500ms;
  }
`;

export default StyledTrackList;
