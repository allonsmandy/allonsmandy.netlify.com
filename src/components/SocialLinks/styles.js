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
  justify-content: space-around;
  list-style: none;
`

export const SocialLinksItem = styled.li`
  border: 1px solid var(--mediumBackground);
  margin: auto 0.275rem;
  background: var(--mediumBackground);
  border-radius: 50%;
`

export const SocialLinksLink = styled.a`
  color: var(--maiscor);
  text-decoration: none;
  transition: color 0.5s;
  display: flex;
  padding: 0.275rem;

  &:hover {
    color: var(--secondary);
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
