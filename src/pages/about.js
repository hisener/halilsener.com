import React from 'react';

import Separator from './../components/Separator';
import Menu from './../components/Menu';
import MetaTags from './../components/MetaTags';
import AvatarImg from './../../static/images/avatar.png';

export default function About({ data }) {
  const { title, description, siteUrl, tags } = data.site.siteMetadata;
  return (
    <div>
      <MetaTags
        title={`About - ${title}`}
        path={`/about`}
        siteUrl={siteUrl}
        tags={tags}
        description={description}
      />
      <Menu />
      <section className="blog container about">
        <div className="medium-8 medium-offset-2 large-10 large-offset-1">
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
              <li>Software Engineer at <a href="https://picnic.app/" target="_blank">Picnic Technologies</a> [Oct 2018 - Present]</li>
              <li>Software Engineer at <a href="https://www.opsgenie.com/" target="_blank">OpsGenie</a> [Jun 2017 - Sep 2018]</li>
              <li>Part-time Software Engineer at <a href="https://www.opsgenie.com/" target="_blank">OpsGenie</a> [Aug 2017 - May 2018]</li>
              <li>Bachelor of Science in Computer Science, Hacettepe University [2013 - 2018]</li>
            </ul>
            <p style={{ paddingBottom:0, marginBottom: 0 }}>
              I like,
            </p>
            <ul>
              <li>Java</li>
              <li>Spring</li>
              <li>Reactive Programming, Project Reactor</li>
              <li>Git, GitHub</li>
              <li>Docker, Bash</li>
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
        tags
      }
    }
  }
`;
