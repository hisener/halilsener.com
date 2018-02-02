import React from 'react';
import GatsbyLink from 'gatsby-link';

import Separator from './../components/Separator';
import Menu from './../components/Menu';
import Posts from './../components/Posts';
import MetaTags from './../components/MetaTags';

export default function Index({ data }) {
  let { edges: posts } = data.allMarkdownRemark;
  let { description, title, siteUrl } = data.site.siteMetadata;
  posts = posts.map(post => post.node);
  return (
    <div>
      <MetaTags
        title={`My drafts - ${title}`}
        path={`/drafts`}
        siteUrl={siteUrl}
        tags="webdev, programming, javascript"
        description={description}
        noIndex={true}
      />
      <Menu />
      <section className="blog container">
        <div className="medium-8 medium-offset-2 large-10 large-offset-1">
          <header className="header">Drafts</header>
          <p className="drafts-description">
            These are the draft posts I'm currently working on.
          </p>
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
  query DraftsQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 5
      filter: { frontmatter: { draft: { eq: true } } }
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
