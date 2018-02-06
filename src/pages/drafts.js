import React from 'react';
import GatsbyLink from 'gatsby-link';

import Separator from './../components/Separator';
import Menu from './../components/Menu';
import Posts from './../components/Posts';
import MetaTags from './../components/MetaTags';

export default function Index({ data }) {
  let posts = []

  if (data.allMarkdownRemark) {
    let { edges: posts } = data.allMarkdownRemark;
    posts = posts.map(post => post.node);
  }

  let { description, title, siteUrl, tags } = data.site.siteMetadata;

  return (
    <div>
      <MetaTags
        title={`My drafts - ${title}`}
        path={`/drafts`}
        siteUrl={siteUrl}
        tags={tags}
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
        siteUrl
        tags
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
