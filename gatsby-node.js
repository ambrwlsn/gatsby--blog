const path = require('path')
const _ = require('lodash')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('./src/templates/blog-post.jsx')
  const plantPostTemplate = path.resolve('./src/templates/plant-post.jsx')
  const tagTemplate = path.resolve('src/templates/tags.jsx')

  // Get a full list of blog markdown posts
  const markdownQueryBlogResult = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    }
  `)

  if (markdownQueryBlogResult.errors) {
    console.error(markdownQueryBlogResult.errors)
    throw markdownQueryBlogResult.errors
  }

  // Create blog posts pages.
  const blogPosts = markdownQueryBlogResult.data.allMarkdownRemark.edges

  blogPosts.forEach((blogPost, index) => {
    const previous =
      index === blogPosts.length - 1 ? null : blogPosts[index + 1].node
    const next = index === 0 ? null : blogPosts[index - 1].node

    createPage({
      path: `blog${blogPost.node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: blogPost.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Get a full list of plant markdown posts
  const markdownQueryPlantResult = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/plants/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              subject
              posttype
              number
              updated
            }
          }
        }
      }
    }
  `)

  if (markdownQueryPlantResult.errors) {
    console.error(markdownQueryPlantResult.errors)
    throw markdownQueryPlantResult.errors
  }

  // Create plant posts pages.
  const plantPosts = markdownQueryPlantResult.data.allMarkdownRemark.edges

  plantPosts.forEach((plantPost, index) => {
    const previous =
      index === plantPosts.length - 1 ? null : plantPosts[index + 1].node
    const next = index === 0 ? null : plantPosts[index - 1].node

    createPage({
      path: `plants${plantPost.node.fields.slug}`,
      component: plantPostTemplate,
      context: {
        slug: plantPost.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Tag pages:
  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  _.each(blogPosts, edge => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      edge.node.frontmatter.tags.forEach(tag => {
        tags = tags.concat(tag)
      })
    }
  })
  // Eliminate duplicate tags
  tags = _.uniq(tags)
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
