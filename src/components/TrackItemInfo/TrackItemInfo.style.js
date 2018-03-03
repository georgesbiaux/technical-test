import styled from 'styled-components';

const StyledTrackItemInfo = styled.div`
  display: flex;
  flex-direction: row;

  .track-name-and-artist {
    text-align: left;
    display: flex;
    flex-direction: column;
    padding-left: 5px;
  }

  .track-name {
    font-size: 14px;
    line-height: 18px;
    color: #343434;
  }

  .track-artist {
    font-size: 12px;
    line-height: 18px;
    color: #8f8f8f;
  }
`;

export default StyledTrackItemInfo;
