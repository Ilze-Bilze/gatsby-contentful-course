import React from "react";
import { graphql } from "gatsby";
import { Layout, RichText, SEO } from "components";

const BlogPost = (props) => {
  console.log(props);
  return (
    <Layout>
      <SEO title={props.data.contentfulBlogPost.title} description={props.data.contentfulBlogPost.description} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      {!!props.data.contentfulBlogPost.pageContent && (
        <RichText 
          references={props.data.contentfulBlogPost.pageContent.references}
          raw={props.data.contentfulBlogPost.pageContent.raw} 
        />
      )}
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($postId: String) {
    contentfulBlogPost(contentful_id: { eq: $postId }) {
      slug
      published(formatString: "DD MMM YYYY")
      pageContent {
        raw
        references {
          ...on ContentfulAsset {
            contentful_id
            title
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
      description
      title
      contentful_id
    }
  }
`

export default BlogPost;