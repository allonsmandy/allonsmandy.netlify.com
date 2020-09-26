import React from "react"
import { graphql } from "gatsby"

import { unique } from "../utils/index"

import Layout from "../components/Layout/"
import SEO from "../components/seo"
import * as S from "../components/Readings/styles"

const Readings = props => {
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
        title="Leituras"
        description="Aqui ficarão organizados os posts em suas determinada categoria"
      />
      {category().map(({ category, background }, i) => {
        if (category !== "leituras") {
          return ""
        } else {
          return (
            <section key={i}>
              <S.ReadingsTitlePage>Trechos de livros</S.ReadingsTitlePage>
              <S.ReadingsDescriptionPage>
                Olá (✿◠‿◠)! Aqui é um espaço para colocar trechos dos livros técnicos que ando lendo ou que já li! 
              </S.ReadingsDescriptionPage>
              {getPostsByCategory(category).map(({ node }) => (
                <S.ReadingsWrapper>
                  <S.ReadingsTitle>{node.frontmatter.title}</S.ReadingsTitle>
                  <S.ReadingsDescription>
                    {node.frontmatter.description}
                  </S.ReadingsDescription>
                </S.ReadingsWrapper>
              ))}
            </section>
          )
        }
      })}
    </Layout>
  )
}

export default Readings

export const listQuery = graphql`
  query ReadingsListQuery {
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
        }
      }
    }
  }
`
