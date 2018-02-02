import React from 'react';

import Separator from './../components/Separator';
import Menu from './../components/Menu';
import MetaTags from './../components/MetaTags';
import AvatarImg from './../../static/images/avatar.png';

export default function Contact({ data }) {
  const { title, description, siteUrl } = data.site.siteMetadata;
  return (
    <div>
      <MetaTags
        title={`Contact - ${title}`}
        path={`/contact`}
        siteUrl={siteUrl}
        tags="webdev, programming, javascript"
        description={description}
      />
      <Menu />
      <section className="blog container about">
        <div className="medium-8 medium-offset-2">
          <header className="header">
            <div className="row text-center">
              <img
                className="header-avatar"
                src={AvatarImg}
                alt="Halil İbrahim Şener"
              />
              <h1>Contact</h1>
            </div>
          </header>
          <Separator />
          <main role="main">
            <p>
              Feel free to contact me at anytime. You can use buttons below. (I prefer e-mail)
            </p>
          </main>
        </div>
      </section>
    </div>
  );
}

export const contactPageQuery = graphql`
  query ContactPageSiteMetadata {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
