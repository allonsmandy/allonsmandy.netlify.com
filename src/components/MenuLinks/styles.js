import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan("large")`
    display: none;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  list-style: none;
  padding-left: 0;
`

export const MenuLinksItem = styled.li`
  padding: 0.1rem 0;

  .active {
    color: var(--texts);
    font-weight: bold;
  }
`

export const MenuLinksLink = styled(AniLink)`
  color: var(--post);
  text-transform: uppercase;
  /* font-family: sans-serif; */
  text-decoration: none;
  transition: color 0.5s;
  /* border-bottom: 1px solid var(--background); */
  display: block;
  padding: 0.5rem 0.9rem;
  font-size: 0.9rem;

  &:hover {
    color: var(--texts);
    font-weight: bold;
    /* border-bottom: 1px solid var(--maiscor); */
  }
`
