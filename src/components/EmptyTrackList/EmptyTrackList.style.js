import styled from 'styled-components';
import EmptyTrackListPicture from './empty-track-list-picture.png';

const StyledEmptyTrackList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .empty-track-list-picture {
    background-image: url('${EmptyTrackListPicture}');
    background-size: contain;
    width: 200px;
    height: 200px;
  }
  
  .tracklist-label {
    font-size: 20px;
    line-height: 22px;
    color: #343434;
  }
  
  .empty-label, .add-label {
    font-size: 14px;
    line-height: 18px;
    color: #8f8f8f;
  }
`;

export default StyledEmptyTrackList;
