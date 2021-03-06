import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const ProfileWrapper = styled.section`
  display: ${props => (props.isMobileHeader ? "none" : "flex")};
  color: var(--postColor);
  flex-direction: column;

  ${media.lessThan("medium")`
    align-items: flex-start;
    display: ${props => (props.isMobileHeader ? "flex" : "none")};
    background: var(--mediumBackground);
    border-bottom: 1px solid var(--borders);
    padding: 1rem;
    width: 100vw;
  `}
`

export const ProfileLink = styled(AniLink)`
  color: var(--secondary);
  text-decoration: none;
  transition: color 0.5s;

  ${media.lessThan("medium")`
    display: flex;
    text-align: left;
  `}

  &:hover {
    color: #b59faa;
  }
`

export const ProfileAuthor = styled.h1`
  font-size: 1.2rem;
  margin: 0.5rem auto 1rem;
  color: var(--texts);
  text-transform: uppercase;
  /* font-family: sans-serif; */

  ${media.lessThan("medium")`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1rem;
  font-weight: 300;
  text-transform: lowercase;

  ${media.lessThan("medium")`
    font-size: 0.8rem;
    margin-top: 0.2rem;
  `}
`

export const ProfileDescription = styled.p`
  font-size: 1rem !important;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan("medium")`
    display: none;
  `}
`
