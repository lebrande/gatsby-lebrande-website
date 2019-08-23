import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';

const IndexPage = ({
  data: {
    allMarkdownRemark: {
      edges,
    },
  },
}) => (
  <Layout>
    <SEO title="Home" />
    {edges.map(({
      node: {
        id,
        excerpt,
        frontmatter: {
          date,
          title,
          path,
          featuredImage: {
            childImageSharp,
          },
        },
      },
    }) => (
      <div key={id}>
        <Img {...childImageSharp} />
        <Link to={path}>
          <h2>
            {title}
          </h2>
        </Link>
        <p>{date}</p>
        <p>{excerpt}</p>
      </div>
    ))}
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
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
`

