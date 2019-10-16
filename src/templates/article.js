import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const Article = ({ data }) => {
  const item = data.kenticoCloudItemArticle.elements
  console.log('ítem url ', item)
  return (
    <Layout>
      <div style={{ padding: '2rem 2rem 2rem 2rem' }}>
        <h1>{item.title.value}</h1>
        <a href='/'>Go to Home </a>
        <img
          src={item.teaser_image.value[0].url}
          width='100%'
          height={item.teaser_image.value[0].height}
        />
        <div dangerouslySetInnerHTML={{ __html: item.body.value }} />
      </div>
    </Layout>
  )
}
export default Article
export const query = graphql`
  query articleQuery($slug: String!) {
    kenticoCloudItemArticle(
      elements: { url_pattern: { value: { eq: $slug } } }
    ) {
      elements {
        teaser_image {
          value {
            name
            type
            size
            url
            width
            height
          }
        }
        body {
          value
        }
        title {
          value
        }
      }
    }
  }
`
