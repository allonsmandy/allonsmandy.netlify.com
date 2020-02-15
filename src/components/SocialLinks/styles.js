import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.nav`
  margin: 1rem auto;
  width: 100%;

  ${media.lessThan("large")`
    display: none;
  `}
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style: none;
  padding-left: 0;
`

export const SocialLinksItem = styled.li`
  border: 1px solid var(--mediumBackground);
  margin: auto 0.175rem;
  background: var(--mediumBackground);
  border-radius: 50%;
`

export const SocialLinksLink = styled.a`
  color: var(--maiscor);
  text-decoration: none;
  transition: color 0.5s;
  display: flex;
  padding: 0 0.275rem;

  &:hover {
    color: var(--secondary);
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 20px;
  height: 20px;
`
