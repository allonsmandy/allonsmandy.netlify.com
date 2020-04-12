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
    border-left: 0.1rem double var(--mediumBackground);
    padding: 0 0.875rem .3rem;
    margin: 3.125rem auto;
    transition: border-left 0.5s;
    background-color: var(--texts);

    > p {
      color: var(--mediumBackground) !important;
      font-family: monospace;
      font-size: 1rem;
      line-height: 1.4;
    }

    &:hover {
      border-left: 0.4rem double var(--algo);
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

  code.language-text, pre.language-text  {
    border-radius: none !important;
  }

  p {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1.2rem !important;
  }

  body.dark {
    --borders: #584750;
    --texts: #d8b15a;
    --postColor: #d5dac2bf;
    --highlight: #b59faa;
    --mediumBackground: #35282f;
    --background: #211b1fb0;
    --code: #a04e4e;
    --secondary: #ceafce;
    --outracor: #443537bd;
    /* --post: #e2bc94; */
    --post: #e097a4d9;
    --maiscor: #dc7f7f;
    --algo: #e2e2ec;

    --filter: opacity(100%);
  }

  body.light {
    --borders: #d0ceb8;
    --postColor: #222;
    --code: black;
    --texts: #b14279;
    --highlight: #043838aa;
    --mediumBackground: #e6e4da;
    --background: #e8e7db;
    --secondary: #af6774;
    --outracor: #cab5ba47;
    --post: #bf527dcf;
    --maiscor: #797979;
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
