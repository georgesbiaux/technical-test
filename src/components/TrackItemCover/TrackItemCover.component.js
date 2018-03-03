import styled from 'styled-components';

const TrackItemCover = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background-image: url('${props => props.pictureUrl}');
  background-size: cover;
`;

export default TrackItemCover;
