import React from 'react';
import GatsbyLink from 'gatsby-link';
import PropTypes from 'prop-types';
import kebabCase from 'lodash.kebabcase';

const CommaSeparatedTags = ({ tags }) =>
  <div className="tags">
    Tags:{' '}
    {tags &&
      tags.split(', ').map((tag, index, array) =>
        <span key={index}>
          <GatsbyLink to={`/tag/${kebabCase(tag)}/`}>
            {tag}
          </GatsbyLink>
          {index < array.length - 1 ? ', ' : ''}
        </span>
      )}
  </div>;

CommaSeparatedTags.propTypes = {
  tags: PropTypes.string
};

export default CommaSeparatedTags;
