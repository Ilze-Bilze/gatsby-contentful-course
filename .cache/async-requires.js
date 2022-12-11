// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("./../../../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-contentful-page-slug-js": () => import("./../../../src/pages/{contentfulPage.slug}.js" /* webpackChunkName: "component---src-pages-contentful-page-slug-js" */),
  "component---src-pages-style-js": () => import("./../../../src/pages/style.js" /* webpackChunkName: "component---src-pages-style-js" */),
  "component---src-templates-blog-post-index-js": () => import("./../../../src/templates/BlogPost/index.js" /* webpackChunkName: "component---src-templates-blog-post-index-js" */),
  "component---src-templates-paginated-blog-page-index-js": () => import("./../../../src/templates/PaginatedBlogPage/index.js" /* webpackChunkName: "component---src-templates-paginated-blog-page-index-js" */)
}

