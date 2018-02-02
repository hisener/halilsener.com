import React from 'react';
import GatsbyLink from 'gatsby-link';

import Separator from './../components/Separator';
import Menu from './../components/Menu';
import Posts from './../components/Posts';
import MetaTags from './../components/MetaTags';

import AvatarImg from './../../static/images/avatar.png';

export default function Index({ data }) {
  let { edges: posts } = data.allMarkdownRemark;
  let { author, description, title, siteUrl, tags } = data.site.siteMetadata;
  posts = posts.map(post => post.node);
  return (
    <div>
      <MetaTags
        title={title}
        path={``}
        siteUrl={siteUrl}
        tags={tags}
        description={description}
      />
      <Menu />
      <section className="blog container">
        <div className="medium-8 medium-offset-2 large-10 large-offset-1">
          <div className="blog-header">
            <GatsbyLink to="/" className="blog-header__link" itemProp="name">
              <img
                className="header-avatar blog-header__img"
                src={AvatarImg}
                alt={author}
              />
            </GatsbyLink>
            <h1>{author}</h1>
            <p>{description}</p>
          </div>
          <header className="header">Latest Posts</header>
          <Separator />
          <div className="posts">
            <Posts posts={posts} />
            <Separator />
            <div className="text-right">
              <GatsbyLink to="/page/2">Older Posts &gt;</GatsbyLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        author
        title
        description
        siteUrl
        tags
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 5
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            draft
          }
        }
      }
    }
  }
`;
