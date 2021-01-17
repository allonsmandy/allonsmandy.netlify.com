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
    font-family: "Catamaran";
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
    background-color: var(--highlight);
    padding: 0.2rem;

    > p {
      color: var(--background) !important;
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
    line-height: 1.4;
  }

  li {
    padding: 0.325rem 0;
    color: var(--postColor);
    font-family: monospace;

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
    padding: 0.3rem 1.4rem;
  }

  h6 {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 600;
    background-color: var(--background);
    margin: 1rem 1.4rem;
    color: var(--texts);
    padding: 0.4rem 0.4rem;
    text-transform: uppercase;
    background-color
  }

  h1 {
    font-size: 2.8rem;

    ${media.lessThan("large")`
      font-size: 1.875rem;
    `}
  }

  h1.titlePage {
    color: #c5aec5;
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
    font-size: 1.2rem;
    line-height: 1.5;
  }

  body.dark {
    --borders: #9c8792;
    --texts: #ff989d;
    --postColor: #dcdcdc;
    --highlight: #ffcc8f;
    --mediumBackground: #34313c;
    --background: #120817b0;
    --code: #a04e4e;
    --secondary: #ffe2e2;
    --outracor: #fff;
    --post: #f0e9e9;
    --maiscor: #ffc6c6;
    --algo: #e0c9bd;
    --title: #d6424a;
    --span: #2f281e;
    --postHome: #57505a;
    --filter: opacity(100%);
  }

  body.light {
    --borders: #9c8a82;
    --postColor: #424242;
    --code: black;
    --texts: #e07a8c;
    --highlight: #f1aa8a;
    --mediumBackground: #fffefc;
    --background: #fff;
    --secondary: #7f7f7f;
    --outracor: #f7babe;
    --post: #4e4e4e;
    --maiscor: #000;
    --algo: #fcf9f5;
    --title: #d6424a;
    --span: #2f281e;
    --postHome: #e7e4e8;
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

::selection{background: var(--texts); color: var(--outracor);}
::-moz-selection{background: var(--texts); color: var(--outracor);}

`
export default GlobalStyles
