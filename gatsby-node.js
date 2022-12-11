const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const {createPage} = actions;
  const {data: {contentfulBlog, allContentfulBlogPost}} = await graphql(`
    {
      contentfulBlog {
        postsPerPage
        slug
      }
      allContentfulBlogPost(sort: {fields: published, order: DESC}) {
        edges {
          node {
            slug
            published(formatString: "DD MMM YYYY")
            pageContent {
              raw
              references {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                title
              }
            }
            description
            title
            contentful_id
          }
        }
      }
    }
  `);

  allContentfulBlogPost.edges.forEach(blogPost => {
    createPage({
      path: `${contentfulBlog.slug}/${blogPost.node.slug}`,
      context: {
        postId: blogPost.node.contentful_id,
      },
      component: path.resolve('./src/templates/BlogPost/index.js')
    })
  });

  const numPages = Math.ceil(
    allContentfulBlogPost.edges.length / contentfulBlog.postsPerPage
  );

  for (let i = 0; i < numPages; i++) {
    createPage({
      path: `${contentfulBlog.slug}${i === 0 ? "" : `/${i + 1}`}`,
      component: path.resolve("./src/templates/PaginatedBlogPage/index.js"),
      context: {
        blogSlug: contentfulBlog.slug,
        totalPages: numPages,
        currentPage: i + 1,
        posts: allContentfulBlogPost.edges.map(blogPost => blogPost.node).slice(i * contentfulBlog.postsPerPage, i * contentfulBlog.postsPerPage + contentfulBlog.postsPerPage),
      }
    })
  }
};
