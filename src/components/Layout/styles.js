import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`

export const LayoutMain = styled.main`
  background: var(--mediumBackground);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  transition: background, color 0.5s;
  width: 100%;

  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }

  ${media.lessThan("medium")`
    padding: 4.125rem 0 3rem 0;
  `}
`
