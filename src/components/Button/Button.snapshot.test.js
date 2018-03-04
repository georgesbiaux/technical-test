import React from 'react';
import { render } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Button from './Button.component';

describe('<Button>', () => {
  it('should render correctly when priority is false', () => {
    const props = {
      priority: false,
      icon: 'fa-bars',
    };
    const tree = render(<Button {...props} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });

  it('should render correctly when priority is true', () => {
    const props = {
      priority: true,
      icon: 'fa-bars',
    };
    const tree = render(<Button {...props} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
