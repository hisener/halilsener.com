import React from 'react';
import GatsbyLink from 'gatsby-link';
import PropTypes from 'prop-types';
import dashify from 'dashify'

const BulletListTags = ({ tags, draft }) =>
  <ul className="tags list-inline text-right">
    {tags &&
      tags.split(', ').map((tag, index) =>
        <li key={index}>
          <GatsbyLink to={`/tag/${dashify(tag)}`}>
            {tag}
          </GatsbyLink>
        </li>
      )}
    {draft &&
      <li className="draft-tag">
        <GatsbyLink to={`/drafts`}>Draft</GatsbyLink>
      </li>}
  </ul>;

BulletListTags.propTypes = {
  tags: PropTypes.string,
  draft: PropTypes.bool
};

export default BulletListTags;
