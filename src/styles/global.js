import { createGlobalStyle } from "styled-components"
import media from "styled-media-query"

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, 
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  blockquote {
    border-left: 0.1rem double var(--mediumBackground);
    padding: 0 0.875rem;
    margin: 3.125rem auto;
    transition: border-left 0.5s;

    > p {
      color: var(--texts);
      font-family: monospace;
      font-size: 1rem;
      line-height: 1.4;
    }

    &:hover {
      border-left: 0.4rem double var(--highlight);
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    line-height: 1;
    font-size: 100%;
  }
  
  img {
    display: block;
    max-width: 100%;
  	width: 100%;
  	height: auto;
  }

  ul,
  ol {
    padding-left: 2.5rem;
    list-style: disc;
    margin: 0 auto 1.2rem;
  }

  li {
    padding: 0.325rem 0;
    color: var(--secondary);
    font-family: sans-serif;

    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    letter-spacing: 0.069rem;
    line-height: 1.4;
    margin: 0 auto 1rem;
    letter-spacing: 2px;
    font-family: sans-serif;
  }


  h1 {
    font-size: 2.8rem;

    ${media.lessThan("large")`
      font-size: 1.875rem;
    `}
  }
  h2 {
    font-size: 2.1rem;

    ${media.lessThan("large")`
      font-size: 1.375rem;
    `}
  }
  h3 {
    font-size: 1.6rem;

    ${media.lessThan("large")`
      font-size: 1.125rem;
    `}
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }

  body.dark {
    --borders: #584750;
    --texts: #d8b15a;
    --postColor: #ccc;
    --highlight: #b59faa;
    --mediumBackground: #35282f;
    --background: #3a2835b0;
    --secondary: #c5aec5;
    --outracor: #443537bd;
    --post: #e2bc94;
    --maiscor: #dc7f7f;
    --algo: #e2e2ec;

    --filter: opacity(100%);
  }

  body.light {
    --borders: #d6d4cd;
    --postColor: #222;
    --texts: #9a7085;
    --highlight: #043838aa;
    --mediumBackground: #e6e4da;
    --background: #f2f0e8;
    --secondary: #bf7645;
    --outracor: #cab5ba47;
    --post: #6b4b43d1;
    --maiscor: #ce4949;
    --algo: brown;

    --filter: opacity(70%);
  }


::-webkit-scrollbar-track {
    background-color: var(--mediumBackground);
}
::-webkit-scrollbar {
    width: 5px;
}
::-webkit-scrollbar-thumb {
    background: var(--highlight);
}

::selection{background: var(--texts); color: var(--postColor);}
::-moz-selection{background: var(--texts); color: var(--postColor);}

`
export default GlobalStyles
