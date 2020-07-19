import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const PostWrapper = styled.section`
  align-items: flex-start;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 1rem;
  width: 100%;
  transition: all 0.3s;
  flex-direction: column;

  body#grid & {
    text-align: center;
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
  &:hover {
    background-color: var(--mediumBackground);
  }
`

export const PostLink = styled(AniLink)`
  color: var(--secondary);
  display: flex;
  text-decoration: none;
  transition: all 0.3s;

  body#grid & {
    background-color: var(--background);
  }
  &:hover {
    background-color: var(--mediumBackground);
  }
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostDate = styled.time`
  font-size: 0.7rem;
  text-transform: uppercase;
  font-family: sans-serif;
  color: var(--borders);
`

export const PostTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0.2rem 0 0.3rem;
  padding: 0 !important;
`

export const PostDescription = styled.h2`
  font-size: 0.9rem !important;
  font-weight: 300;
  line-height: 1.2;
`