import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';

import Separator from './../components/Separator';
import Menu from './../components/Menu';

export default () =>
  <div>
    <Helmet
      title="Not found - Halil İbrahim Şener"
      meta={[{ name: 'description', content: 'Not found' }]}
      noIndex={true}
    />
    <Menu />
    <section className="blog container about">
      <div className="medium-8 medium-offset-2 large-10 large-offset-1">
        <header className="header">
          <div className="row text-center">
            <h1>404! The page you are trying to access is not here.</h1>
          </div>
        </header>
        <Separator />
        <p className="not-found-section">
          Sorry for the inconvience. You can go to the{' '}
          <GatsbyLink to="/">home page</GatsbyLink> or{' '}
          <a href="https://twitter.com/intent/tweet?text=@hi_sener%20Hi!" target="_blank">
            tweet me
          </a>{' '}
          about this incident. Thanks.
        </p>
      </div>
    </section>
  </div>;
