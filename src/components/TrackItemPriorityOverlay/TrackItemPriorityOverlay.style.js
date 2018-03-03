import styled from 'styled-components';

const StyledTrackItemPriorityOverlay = styled.div`
  .priority-icon-container {
    border-color: transparent transparent transparent #75d286;
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 30px 0 0 30px;
  }

  .priority-icon {
    position: absolute;
    z-index: 3;
    bottom: 4px;
    left: -28px;
    transform: rotate(-90deg);
    font-size: 14px;
    color: #ffffff;
  }

  .bottom-border {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 5px;
    background-color: #75d286;
    z-index: 1;
  }
`;

export default StyledTrackItemPriorityOverlay;
