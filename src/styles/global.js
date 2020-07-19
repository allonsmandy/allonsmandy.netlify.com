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
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

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
    margin: 2.125rem 1rem;
    transition: border-left 0.5s;
    background-color: #9c4460;
    padding: 0.2rem;

    > p {
      color: white !important;
      /* font-family: monospace; */
      font-size: 1rem !important;
      position: relative;
      top: 6px;
    }
  }

  pre[class*="language-"] {
    margin: .5em -2px !important;
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
    line-height: 1.4;
  }

  li {
    padding: 0.325rem 0;
    color: var(--highlight);
    /* font-family: sans-serif; */

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
    line-height: 1.4;
    margin: 0 auto 1rem;
    /* letter-spacing: 2px; */
    /* font-family: sans-serif; */
    padding: 0 1rem;
  }

  h6 {
    line-height: 1.4;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--algo);
    padding: 0.3rem 1.4rem;
    /* text-transform: uppercase; */
  }

  h1 {
    font-size: 2.8rem;

    ${media.lessThan("large")`
      font-size: 1.875rem;
    `}
  }

  h1.titlePage {
    color: #c5aec5;
    padding: 0 1rem;
    font-weight: 100;
  }

  h2 {
    font-size: 2.1rem;

    ${media.lessThan("large")`
      font-size: 1.375rem;
    `}
  }
  h3 {
    font-size: 1.8rem;

    ${media.lessThan("large")`
      font-size: 1.125rem;
    `}
  }
  h4 {
    font-size: 1.9rem;
  }
  h5 {
    font-size: 1.5rem;
  }
  strong {
    font-weight: 700;
  }

  code.language-text, pre.language-text  {
    border-radius: none !important;
  }

  p {
    font-size: 1.1rem !important;
  }

  body.dark {
    --borders: #584750;
    --texts: #d8b15a;
    --postColor: #a9a9a9;
    --highlight: #b9b1e6d9;
    --mediumBackground: #1a1821;
    /* --background: #331b2b; */
    --background: #231d29;
    --code: #a04e4e;
    --secondary: #ccacbf;
    --outracor: #b9ba93;
    /* --post: #e2bc94; */
    --post: #dcc1d5;
    --maiscor: #dc7f7f;
    --algo: #ff9a9a;

    --filter: opacity(100%);
  }

  body.light {
    --borders: #d0ceb8;
    --postColor: #424242;
    --code: black;
    --texts: #ca7a94;
    --highlight: #0a7f80ed;
    --mediumBackground: #fdfdfd;
    --background: #f1f0ec;
    --secondary: #675b5d;
    --outracor: #00000080;
    --post: #4e4e4e;
    --maiscor: #966796;
    --algo: brown;
    --filter: opacity(75%);
  }

  .filterImg {
    filter: var(--filter); 
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

::selection{background: var(--texts); color: var(--mediumBackground);}
::-moz-selection{background: var(--texts); color: var(--mediumBackground);}

`
export default GlobalStyles
