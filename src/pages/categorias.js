import React from "react"
import { graphql } from "gatsby"
import slugify from "slugify"
import { unique } from "../utils/index"

import styled from "styled-components"

import Layout from "../components/Layout/"
import SEO from "../components/seo"

const Category = styled.a`
  background: ${props => props.background};
  color: var(--background);
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1rem;
  display: flex;
`

const SeriesPage = props => {
  const postList = props.data.allMarkdownRemark.edges.filter(
    ({ node }) => node.frontmatter.category !== null
  )

  const category = () => {
    const categories = postList
      .map(({ node }) => node.frontmatter.category)
      .filter(unique)

    const background = postList
      .map(({ node }) => node.frontmatter.background)
      .filter(unique)

    const data = categories.reduce((acc, val, index) => {
      acc.push({ category: val, background: background[index] })
      return acc
    }, [])

    return data
  }

  const slugifyCategory = cat => slugify(cat, { lower: true })
  const getPostsByCategory = category =>
    postList.filter(({ node }) => node.frontmatter.category === category)

  return (
    <Layout>
      <SEO
        title="Categorias"
        description="Aqui ficarão organizados os posts em suas determinada categoria"
      />
      {category().map(({ category, background }, i) => {
        if (category === "snippets" || category === "leituras") {
          return ""
        } else {
          return (
            <section key={i}>
              <Category
                href={slugifyCategory(category)}
                background={background}
                id={slugifyCategory(category)}
              >
                {" "}
                {category}
              </Category>
            </section>
          )
        }
      })}
    </Layout>
  )
}

export default SeriesPage

export const PostListQuery = graphql`
  query SeriesListQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            title
            description
            category
            background
          }
        }
      }
    }
  }
`
