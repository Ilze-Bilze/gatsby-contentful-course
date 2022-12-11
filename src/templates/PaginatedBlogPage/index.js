import React from "react";
import { Link } from "gatsby";
import { Layout } from "components";
import { Content, Post, Pagination, PageNumber } from "./style";

const PaginatedBlogPage = ({pageContext}) => {
  console.log(pageContext);
  return (
    <Layout>
      <Content>
        <h1>I'm the paddination page</h1>
        {pageContext.posts.map((post) => (
          <Post key={post.contentful_id}>
            <h3>
              <Link to={post.slug}>{post.title}</Link>
            </h3>
            <p>{post.description}</p>
            <small>{post.published}</small>
          </Post>
        ))}
      </Content>
      <Pagination>
        {Array.from({length: pageContext.totalPages}).map((n, i) => {
          return (
            <PageNumber key={i} isActive={i + 1 === pageContext.currentPage}>
              <Link to={`/${pageContext.blogSlug}/${i === 0 ? "" : i +1}`}>
                {i + 1}
              </Link>
            </PageNumber>
          )
        })}
      </Pagination>
    </Layout>
  )
}

export default PaginatedBlogPage;