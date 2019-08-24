import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';
import PostsList from '../components/PostsList/PostsList';


const IndexPage = ({
  data: {
    site: {
      siteMetadata: {
        title,
      },
    },
  },
}) => (
  <Layout>
    <Seo title={title} />
    <PostsList />
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
  }
`

