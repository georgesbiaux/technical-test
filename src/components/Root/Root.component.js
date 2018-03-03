import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import PropTypes from 'prop-types';
import fr from 'react-intl/locale-data/fr';

import frMessages from 'translations/fr.json';
import { flattenMessages } from 'services/i18n/intl';
import StyledRoot from './Root.style';

const locales = {
  fr: flattenMessages(frMessages),
};

addLocaleData([...fr]);

export default class Root extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  render() {
    return (
      <IntlProvider locale="fr" messages={locales.fr}>
        <StyledRoot>{this.props.children}</StyledRoot>
      </IntlProvider>
    );
  }
}
