import styled from 'styled-components';

const StyledButton = styled.button`
  border: 0;
  font-size: 22px;
  width: 70px;
  height: 40px;
  border-radius: 20px;
  background-color: ${props => (props.userVoted ? '#d06769' : '#343434')};
  color: #ffffff;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.2s ease;
  font-weight: 200;

  :focus {
    outline: -webkit-focus-ring-color auto 0px;
  }

  :hover {
    background-color: ${props => (props.userVoted ? '#b2615f' : '#343434')};
  }

  i {
    margin-left: 5px;
  }
`;

export default StyledButton;
