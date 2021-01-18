import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;

  ${media.lessThan("medium")`
    align-items: flex-start;
    width: 100%;
    border: 0;
    height: calc(100% - 50px);
    padding: 0;
    transform: ${props =>
      props.isMenuOpen ? "translateX(0)" : "translateX(-100vw)"};
  `}
`

export const SidebarLinksContainer = styled.section`
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
`
