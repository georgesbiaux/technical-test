import React from 'react';
import { FormattedMessage } from 'react-intl';
import StyledEmptyTrackList from './EmptyTrackList.style';

const EmptyTrackList = () => (
  <StyledEmptyTrackList className="empty-track-list">
    <div className="empty-track-list-picture" />
    <div className="tracklist-label">
      <FormattedMessage id="emptyTrackList.tracklist" />
    </div>
    <div className="empty-label">
      <FormattedMessage id="emptyTrackList.empty" />
    </div>
    <div className="add-label">
      <FormattedMessage id="emptyTrackList.add" />
    </div>
  </StyledEmptyTrackList>
);

export default EmptyTrackList;
