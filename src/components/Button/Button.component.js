import React from 'react';
import StyledButton from './Button.style';

const Button = props => (
  <StyledButton
    className="priority-button"
    priority={props.priority}
    onClick={props.onClick}
  >
    <i className={`fa ${props.icon}`} />
  </StyledButton>
);

export default Button;
