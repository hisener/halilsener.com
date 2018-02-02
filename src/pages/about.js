import React from 'react';

import Separator from './../components/Separator';
import Menu from './../components/Menu';
import MetaTags from './../components/MetaTags';
import AvatarImg from './../../static/images/avatar.png';

export default function About({ data }) {
  const { title, description, siteUrl } = data.site.siteMetadata;
  return (
    <div>
      <MetaTags
        title={`About - ${title}`}
        path={`/about`}
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
              <h1>Hey, I'm Halil.</h1>
            </div>
          </header>
          <Separator />
          <main role="main">
            <ul>
              <li>Computer Science student at <a href="http://www.cs.hacettepe.edu.tr/" target="_blank">Hacettepe</a> [June 2018]</li>
              <li>Part-time Software Engineer at <a href="https://www.opsgenie.com/" target="_blank">OpsGenie</a> [since Aug 2017]</li>
            </ul>
            <p>
              I am trying to <i>not</i> be an {' '}
              <a href="https://twitter.com/rakyll/status/953518942248615941" target="_blank">*end developer</a>.
            </p>
            <p style={{ paddingBottom:0, marginBottom: 0 }}>
              I like,
            </p>
            <ul>
              <li>Java</li>
              <li>Node.js, Express.js</li>
              <li>MongoDB, Mongoose</li>
              <li>React.js</li>
              <li>Git, GitHub</li>
              <li>Bash</li>
              <li>AWS, Heroku</li>
            </ul>
          </main>
        </div>
      </section>
    </div>
  );
}

export const aboutPageQuery = graphql`
  query AboutPageSiteMetadata {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
