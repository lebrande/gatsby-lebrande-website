import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import PostsListItem from '../PostsListItem/PostsListItem';

import './posts-list.scss';

const PostsList = () => {
  const data = useStaticQuery(graphql`
    query PostsListQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date(locale: "pl")
              title
              path
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 500, maxHeight: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt
            id
          }
        }
      }
    }
  `);

  const {
    allMarkdownRemark: { edges },
  } = data;

  return (
    <div className="posts-list">
      {edges.map(
        ({
          node: {
            id,
            excerpt,
            frontmatter: {
              date,
              title,
              path,
              featuredImage: { childImageSharp },
            },
          },
        }) => (
          <PostsListItem
            key={id}
            childImageSharp={childImageSharp}
            path={path}
            title={title}
            date={date}
            excerpt={excerpt}
          />
        ),
      )}
    </div>
  );
};

export default PostsList;
