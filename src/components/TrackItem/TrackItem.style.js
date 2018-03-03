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
`;

export default StyledTrackItem;
