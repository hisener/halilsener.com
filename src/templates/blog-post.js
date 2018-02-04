import React from 'react';
import dateformat from 'dateformat';
import GatsbyLink from 'gatsby-link';
import ReactDisqusThread from 'react-disqus-thread';
import uuidv5 from 'uuid/v5';

import Menu from '../components/Menu';
import BulletListTags from '../components/BulletListTags';
import Separator from '../components/Separator';
import MetaTags from '../components/MetaTags';

import AvatarImg from './../../static/images/avatar.png';

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data;
  const { title, siteUrl } = data.site.siteMetadata;
  const { next, prev } = pathContext;

  const isProduction = process.env.NODE_ENV === 'production';
  const fullUrl = `${siteUrl}${post.frontmatter.path}`;

  return (
    <div>
      <MetaTags
        title={`${post.frontmatter.title} - ${title}`}
        description={post.excerpt}
        tags={post.frontmatter.tags}
        path={post.frontmatter.path}
        siteUrl={siteUrl}
        noIndex={post.frontmatter.draft}
      />
      <Menu />
      <main className="blog container" role="main">
        <div className="medium-8 medium-offset-2 large-10 large-offset-1 post">
          <header className="post-head">
            <h1 className="post-title">
              {post.frontmatter.title}
            </h1>
          </header>
          <section className="post-meta">
            <div className="row">
              <div className="medium-4">
                <ul className="list-inline">
                  <li>
                    <GatsbyLink
                      to="/"
                      className="author-avatar"
                      itemProp="name"
                    >
                      <img src={AvatarImg} alt="Halil İbrahim Şener" />
                    </GatsbyLink>
                  </li>
                  <li>
                    <div className="author-name">Halil İbrahim Şener</div>
                    <span
                      className="post-date"
                      dateTime={dateformat(
                        post.frontmatter.date,
                        'isoDateTime'
                      )}
                    >
                      {dateformat(post.frontmatter.date, 'd mmmm yyyy')}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="medium-8">
                <BulletListTags
                  tags={post.frontmatter.tags}
                  draft={post.frontmatter.draft}
                />
              </div>
            </div>
          </section>
          <Separator />
          <article className="main-post">
            <section
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <Separator />

            <section className="blog-section">
              <header className="header">
                <h2>Comments</h2>
              </header>
              {isProduction &&
                <ReactDisqusThread
                  shortname="kostasbariotis"
                  identifier={uuidv5(fullUrl, uuidv5.URL)}
                  title={post.frontmatter.title}
                  url={fullUrl}
                />}
            </section>
          </article>
          <Separator />
        </div>
      </main>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
        draft
      }
    }
  }
`;
