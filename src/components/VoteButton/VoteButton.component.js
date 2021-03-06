import React from 'react';
import StyledVoteButton from './VoteButton.style';

const VoteButton = props => (
  <StyledVoteButton
    className="vote-button"
    userVoted={props.userVoted}
    onClick={props.onClick}
  >
    {props.votes}
    <i className="fa fa-heart" />
  </StyledVoteButton>
);

export default VoteButton;
