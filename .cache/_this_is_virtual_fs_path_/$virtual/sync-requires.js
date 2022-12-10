
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/ilze-bilze/sites/gatsby-contentful-course/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/ilze-bilze/sites/gatsby-contentful-course/src/pages/404.js")),
  "component---src-pages-contentful-page-slug-js": preferDefault(require("/Users/ilze-bilze/sites/gatsby-contentful-course/src/pages/{contentfulPage.slug}.js"))
}

