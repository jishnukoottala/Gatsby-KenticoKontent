const path = require(`path`)

exports.onCreatNode = ({ node, actions: { createNodeField } }) => {
  if (node.internal.type === `KenticoCloudItemArticle`) {
    createNodeField({
      node,
      name: `slug`,
      value: node.elements.url_pattern.value
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query data from Kentico
  const result = await graphql(`
    {
      allKenticoCloudItemArticle {
        edges {
          node {
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
              url_pattern {
                value
              }
            }
          }
        }
      }
    }
  `)
  // Create pages
  result.data.allKenticoCloudItemArticle.edges.forEach(({ node }) => {
    createPage({
      path: node.elements.url_pattern.value,
      component: path.resolve(`src/templates/article.js`),
      context: {
        slug: node.elements.url_pattern.value
      }
    })
  })
}
