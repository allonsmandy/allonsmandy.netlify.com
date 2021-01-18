import styled from "styled-components"
import media from "styled-media-query"
import transitions from "../../styles/transitions"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
  transition: ${transitions.ALL};

  ${media.lessThan("medium")`
    border: 0;
    border-top: 1px solid var(--borders);
    bottom: -3px;
    flex-direction: row;
    height: auto;
    padding: 0;
    padding-bottom: env(safe-area-inset-bottom);
    position: fixed;
    width: 100%;
  `}
`

export const MenuBarGroupMobile = styled.div`
  display: none;
  ${media.lessThan("medium")`
    display: block;
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  ${media.lessThan("medium")`
    flex-direction: row;
  `}
`

export const MenuBarLink = styled(AniLink)`
  display: block;

  &.active {
    span {
      color: var(--highlight);
    }
  }
`

export const MenuBarExternalLink = styled.a`
  display: block;
`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  transition: ${transitions.COLOR};

  svg {
    vertical-align: middle;
  }
  &.light {
    color: #d4d400;
  }
  &.display {
    ${media.lessThan("medium")`
      display: none;
    `}
  }
  ${media.greaterThan("medium")`
    &:hover {
      color: var(--highlight);
    }
  `}
  ${media.lessThan("medium")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`
