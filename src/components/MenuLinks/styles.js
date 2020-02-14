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
`

export const MenuLinksItem = styled.li`
  padding: 0.1rem 0;

  .active {
    color: var(--outracor);
    background: var(--mediumBackground);
  }
`

export const MenuLinksLink = styled(AniLink)`
  color: var(--algo);
  text-decoration: none;
  transition: color 0.5s;
  border: 1px solid var(--borders);
  display: block;
  padding: 0.2rem 0.9rem;
  font-size: 1rem;

  &:hover {
    color: var(--postColor);
    background: var(--background);
  }
`
