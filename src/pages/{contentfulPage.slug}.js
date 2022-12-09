import React from "react";
import { graphql } from "gatsby";
import { Layout, SEO } from "components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ContentfulPage(props) {
  return (
    <Layout>
      {/* <SEO title={props.data.contentfulPage.description} /> */}
      {documentToReactComponents(JSON.parse(props.data.contentfulPage.pageContent.raw))}
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      id
      title
      description
      pageContent {
        raw
      }
    }
  }
`