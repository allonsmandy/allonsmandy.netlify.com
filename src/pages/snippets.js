import React from "react"
import { graphql } from "gatsby"

import { unique } from "../utils/index"

import Layout from "../components/Layout/"
import SEO from "../components/seo"
import * as S from "../components/Snippets/styles"

const Snippets = props => {
  const list = props.data.allMarkdownRemark.edges.filter(
    ({ node }) => node.frontmatter.category !== null
  )

  const category = () => {
    const categories = list
      .map(({ node }) => node.frontmatter.category)
      .filter(unique)

    const background = list
      .map(({ node }) => node.frontmatter.background)
      .filter(unique)

    const data = categories.reduce((acc, val, index) => {
      acc.push({ category: val, background: background[index] })
      return acc
    }, [])

    return data
  }

  const getPostsByCategory = category =>
    list.filter(({ node }) => node.frontmatter.category === category)

  return (
    <Layout>
      <SEO
        title="Snippets"
        description="Snippets de códigos interessantes"
      />
      {category().map(({ category, background }, i) => {
        if (category !== "snippets") {
          return ""
        } else {
          return (
            <S.SnippetsSection key={i}>
              <S.Wrapper>
                <S.SnippetsTitlePage>Snippets</S.SnippetsTitlePage>
                <S.SnippetsDescriptionPage>
                  Olá (✿◠‿◠)! Esta página é destinada a publicar snippets úteis 
                  e interessantes de códigos.
                </S.SnippetsDescriptionPage>
              </S.Wrapper>
              {getPostsByCategory(category).map(({ node }) => (
                <S.SnippetsWrapper>
                  <S.SnippetsTitle>{node.frontmatter.title}</S.SnippetsTitle>
                  <S.SnippetsDescription>
                    <div dangerouslySetInnerHTML={{ __html: node.html }}>                    
                    </div>
                  </S.SnippetsDescription>
                </S.SnippetsWrapper>
              ))}
            </S.SnippetsSection>
          )
        }
      })}
    </Layout>
  )
}

export default Snippets

export const listQuery = graphql`
  query SnippetsListQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            category
          }
          html
        }
      }
    }
  }
`
