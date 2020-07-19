import React from 'react'
import { graphql } from 'gatsby'
import slugify from 'slugify'

import { unique } from '../utils/index'

import styled from 'styled-components'

import Layout from '../components/Layout/'
import SEO from '../components/seo'
import Post from '../components/PostCategory'

const CategoryTitle = styled.h2`
  background: var(--outracor);
  color: var(--background);
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1rem;
`

const SeriesPage = props => {
  const postList = props.data.allMarkdownRemark.edges.filter(
    ({ node }) => node.frontmatter.category !== null
  )

  const category = postList
    .map(({ node }) => node.frontmatter.category)
    .filter(unique)

  const slugifyCategory = cat => slugify(cat, { lower: true })

  const getPostsByCategory = category =>
    postList.filter(({ node }) => node.frontmatter.category === category)

  return (
    <Layout>
      <SEO
        title="Categorias"
        description="Aqui ficarão organizados os posts em suas determinada categoria"
      />
      {category.map((category, i) => (
        <section key={i}>
          <CategoryTitle 
            id={slugifyCategory(category)}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
          </CategoryTitle>

          {getPostsByCategory(category).map(({ node }) => (
            <Post
              key={node.id}
              slug={node.fields.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              description={node.frontmatter.description}
            />
          ))}
        </section>
      ))}
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
          }
        }
      }
    }
  }
`