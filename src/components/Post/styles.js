import styled from "styled-components"
import media from "styled-media-query"

export const PostHeader = styled.header`
  color: var(--maiscor);
  margin: auto;
  max-width: 70rem;
  padding: 5rem 3rem 0;

  ${media.lessThan("large")`
    padding: 3rem 0 0;
    max-width: 100%;
  `}
`

export const PostTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 0.5rem auto;

  ${media.lessThan("large")`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}
`

export const PostDescription = styled.h2`
  font-size: 1.0rem;
  font-weight: 200;
  padding: 0 1.4rem;
  font-style: italic;

  &:before {
    content: "";
    width: 10px;
    height: 10px;
    position: relative;
    top: 0px;
    background: var(--texts);
    border-radius: 50%;
    margin-right: 1rem;
    display: inline-block;
  }

  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`

export const PostDate = styled.p`
  font-size: 0.7rem;
  font-weight: 100;
  text-transform: uppercase;
  /* font-family: sans-serif; */
  padding: 0 1.3rem;

  ${media.lessThan("large")`
    padding: 0 1rem;
  `}
`

export const MainContent = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 1rem 3rem;

  ${media.lessThan("large")`
    padding: 2rem 0;
    max-width: 100%;
  `}

  p,
  h1,
  h2,
  h3,
  h4,
  .tags,
  iframe,
  .button-post {
    color: var(--postColor);
    font-weight: 500;
    line-height: 1.7;
    padding: 0 1.4rem;

    ${media.lessThan("large")`
      padding: 0 1rem;
      word-break: break-word;
    `}
  }

  p {
    margin: 0 auto 1rem;
  }

  img {
    margin: 1.875rem auto;
  }

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;

    ${media.lessThan("large")`
      padding: 0 1rem;
    `}
  }

  hr {
    border: 1px solid var(--borders);
    margin: 3rem auto;
  }

  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }

  h1,
  h2,
  h3,
  h5 {
    color: var(--texts);

    &:before {
      content: "➤";
      display: inline-block;
      margin-right: 1rem;
    }
  }

  h4 {
    color: var(--texts);
    text-align: center;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;

    ${media.lessThan("large")`
      padding: 0;
    `}

  }

  .instagram-media {
    margin: 1rem auto !important;
  }

  a {
    border-bottom: 1px dashed var(--texts);
    color: var(--texts);
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: #fff;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`
