import styled from 'styled-components';

const TrackItemUserIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 10px;
  border-radius: 50%;
  background-image: url('${props => props.pictureUrl}');
  background-size: cover;
`;

export default TrackItemUserIcon;
