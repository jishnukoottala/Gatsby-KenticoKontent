import React from 'react'
import Link from 'gatsby-link'

const PostListing = ({ node, index }) => {
  console.log('--node is ', node)
  return (
    <div>
      <span style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <a href='/' style={{}}>
          Go to Home
        </a>
      </span>
      <Link to={node.elements.url_pattern.value}>
        <div
          style={{
            marginTop: '1rem',
            padding: '3rem 3rem 3rem 3rem',
            boxShadow: '10px 10px 12px -9px rgba(0,0,0,0.75)'
          }}
        >
          <img
            src={node.elements.teaser_image.value[0].url}
            width='100%'
            height='600px'
            alt='post_image'
          />
          <h1>{node.elements.title.value}</h1>
        </div>
      </Link>
    </div>
  )
}

export default PostListing
