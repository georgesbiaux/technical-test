import React from 'react';
import { render } from 'enzyme';
import toJSON from 'enzyme-to-json';
import VoteButton from './VoteButton.component';

describe('<VoteButton>', () => {
  it('should render correctly when userVoted is false', () => {
    const props = {
      userVoted: false,
      votes: 0,
    };
    const tree = render(<VoteButton {...props} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });

  it('should render correctly when userVoted is true', () => {
    const props = {
      userVoted: true,
      votes: 3,
    };
    const tree = render(<VoteButton {...props} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
