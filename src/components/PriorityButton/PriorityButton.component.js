import React from 'react';
import StyledPriorityButton from './PriorityButton.style';

const PriorityButton = props => (
  <StyledPriorityButton
    className="priority-button"
    priority={props.priority}
    onClick={props.onClick}
  >
    <i className="fa fa-bars" />
  </StyledPriorityButton>
);

export default PriorityButton;
