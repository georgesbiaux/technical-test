import React from 'react';
import toJSON from 'enzyme-to-json';
import createComponentWithIntl from 'services/i18n/create-component-with-intl';
import EmptyTrackList from './EmptyTrackList.component';

describe('<EmptyTrackList>', () => {
  it('should render correctly', () => {
    const tree = createComponentWithIntl(<EmptyTrackList />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
