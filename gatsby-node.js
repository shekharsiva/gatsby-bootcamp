const path = require("path")
/* module.exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    //console.log(node)
    //console.log(JSON.stringify(node, undefined, 4))
    console.log("@@@@@@@@@@@@@@@@@@@@", slug)
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
 */
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  /* const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `) */
  const cfresponse = await graphql(`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  /* response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  }) */
  cfresponse.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
