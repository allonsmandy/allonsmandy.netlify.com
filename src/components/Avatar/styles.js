import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  height: 8rem;
  margin: auto;
  width: 8rem;
  /* border: 4px solid var(--outracor); */

  ${media.lessThan("large")`
    height: 1.875rem;
    width: 1.875rem;
    border: none;
  `}
`
