import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan("medium")`
    margin: auto;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  list-style: none;
  padding-left: 0;

  ${media.lessThan("medium")`
    font-size: 1.8rem;
  `}
`

export const MenuLinksItem = styled.li`
  padding: 0.1rem 0;

  .active {
    background-color: var(--texts);
    color: var(--span);
    font-weight: bold;
  }

  ${media.lessThan("medium")`
    padding: 1rem 0;
  `}
`

export const MenuLinksLink = styled(AniLink)`
  font-family: monospace;
  border-radius: 10px;
  background-color: var(--postHome);
  color: var(--post);
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.4s;
  display: block;
  padding: 0.5rem 0.9rem;
  font-size: 0.9rem;

  &:hover {
    color: var(--span);
    font-weight: bold;
    background-color: var(--texts);
  }
`
