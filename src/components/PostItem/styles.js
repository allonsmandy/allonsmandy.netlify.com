import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemLink = styled(AniLink)`
  color: var(--secondary);
  display: flex;
  text-decoration: none;
  transition: all 0.3s;

  body#grid & {
    background-color: var(--background);
  }
  &:hover {
    background-color: var(--mediumBackground);
    /* color: var(--mediumBackground); */
  }
`

export const PostItemWrapper = styled.section`
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
    color: var(--span);
    background-color: var(--algo);
  }
`

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props => (props.background ? props.background : "pink")};
  color: var(--background);
  display: flex;
  font-weight: 600;
  justify-content: center;
  text-transform: uppercase;
  border-radius: 0;
  font-size: 1rem;
  min-height: auto;
  min-width: auto;
  padding: 0.2rem 0.5rem;
  margin-bottom: 0.7rem;

  body#grid & {
    margin-bottom: 1.5rem;
  }
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDate = styled.time`
  font-size: 0.7rem;
  text-transform: uppercase;
  font-family: sans-serif;
  color: var(--borders);
`

export const PostItemTitle = styled.h1`
  /* text-transform: uppercase; */
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0.2rem 0 0.3rem;
  padding: 0 !important;
`

export const PostItemDescription = styled.p`
  font-size: 0.9rem !important;
  font-weight: 300;
  line-height: 1.2;
`
