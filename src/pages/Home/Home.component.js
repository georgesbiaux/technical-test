import React from 'react';

import { FormattedMessage } from 'react-intl';

import StyledIntro from './Home.style';

const Home = () => (
  <React.Fragment>
    <StyledIntro>
      <p>
        <FormattedMessage
          id="home.get-started"
          defaultMessage="To get started, edit"
        />
        <code className="intro-code">src/App.js</code>
        <FormattedMessage id="home.save-to-reload" />
      </p>
      <p>
        <FormattedMessage id="home.create-route" />
      </p>
      <p>
        <FormattedMessage id="home.generate-component" />
        <code className="intro-code">yarn generate</code>
      </p>
      <p>
        <FormattedMessage id="home.generate-module" />
      </p>
      <p>
        <FormattedMessage id="home.readme" />
      </p>
    </StyledIntro>
  </React.Fragment>
);

export default Home;
