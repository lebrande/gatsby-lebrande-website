import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import './posts-list-item.scss';

const PostListItem = ({ childImageSharp, path, title, date, excerpt }) => (
  <div className="posts-list-item">
    <Link to={path}>
      <Img {...childImageSharp} />
    </Link>
    <div className="posts-list-item__content">
      <Link to={path} className="posts-list-item__title-link">
        <h2>{title}</h2>
      </Link>
      <p>{date}</p>
      <p>{excerpt}</p>
    </div>
  </div>
);

PostListItem.propTypes = {
  childImageSharp: PropTypes.object,
  path: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
};

export default PostListItem;
