import styled from 'styled-components';

const StyledTrackItem = styled.div`
  background-color: #fbfbfb;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  flex-direction: row;

  .user-icon {
    height: 60px;
    width: 60px;
    margin: 10px;
    border-radius: 50%;
  }

  .track-container {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .track-row {
    flex: 1;
  }

  .track-footer {
    line-height: 20px;
    font-size: 12px;
    display: flex;
    flex-direction: row;
  }

  .added-by {
    text-align: left;
    color: #74a7d2;
    flex: 1;
  }

  .time-before-play {
    padding-right: 10px;
    color: #8f8f8f;
  }
`;

export default StyledTrackItem;
