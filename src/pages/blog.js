import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostListing from '../components/PostListing'

const BlogPage = ({ data }) => {
  return (
    <Layout>
      {data.allKenticoCloudItemArticle.edges.map(({ node, index }) => (
        <PostListing index={index} key={node} node={node} />
      ))}
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allKenticoCloudItemArticle {
      edges {
        node {
          elements {
            title {
              value
            }
            url_pattern {
              value
            }
            teaser_image {
              value {
                url
                width
                height
              }
            }
          }
          id
        }
      }
    }
  }
`
