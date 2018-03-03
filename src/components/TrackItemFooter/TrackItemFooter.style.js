import styled from 'styled-components';

const StyledTrackItem = styled.div`
  line-height: 20px;
  font-size: 12px;
  display: flex;
  flex-direction: row;

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
