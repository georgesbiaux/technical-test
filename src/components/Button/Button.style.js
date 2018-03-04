import styled from 'styled-components';

const StyledButton = styled.button`
  border: 0;
  font-size: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => (props.priority ? '#75d286' : '#343434')};
  color: #ffffff;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.2s ease;

  :focus {
    outline: -webkit-focus-ring-color auto 0px;
  }

  :hover {
    background-color: ${props => (props.priority ? '#599e65' : '#343434')};
  }
`;

export default StyledButton;
