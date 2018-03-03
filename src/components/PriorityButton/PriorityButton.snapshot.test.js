import React from 'react';
import { render } from 'enzyme';
import toJSON from 'enzyme-to-json';
import PriorityButton from './PriorityButton.component';

describe('<PriorityButton>', () => {
  it('should render correctly when priority is false', () => {
    const props = {
      priority: false,
    };
    const tree = render(<PriorityButton {...props} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });

  it('should render correctly when priority is true', () => {
    const props = {
      priority: true,
    };
    const tree = render(<PriorityButton {...props} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
