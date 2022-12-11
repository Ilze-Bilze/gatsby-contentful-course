
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/ilze-bilze/sites/gatsby-contentful-course/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/ilze-bilze/sites/gatsby-contentful-course/src/pages/404.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/ilze-bilze/sites/gatsby-contentful-course/src/pages/contact.js")),
  "component---src-pages-contentful-page-slug-js": preferDefault(require("/Users/ilze-bilze/sites/gatsby-contentful-course/src/pages/{contentfulPage.slug}.js")),
  "component---src-pages-style-js": preferDefault(require("/Users/ilze-bilze/sites/gatsby-contentful-course/src/pages/style.js")),
  "component---src-templates-blog-post-index-js": preferDefault(require("/Users/ilze-bilze/sites/gatsby-contentful-course/src/templates/BlogPost/index.js")),
  "component---src-templates-paginated-blog-page-index-js": preferDefault(require("/Users/ilze-bilze/sites/gatsby-contentful-course/src/templates/PaginatedBlogPage/index.js"))
}

