import styled from "styled-components"
import media from "styled-media-query"

export const SearchWrapper = styled.section`
  background: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;
  body#grid & {
    ul.ais-Hits-list {
      list-style: none;
      padding-left: 0;
      background-color: var(--borders);
      border-bottom: 1px solid var(--borders);
      border-top: 1px solid var(--borders);
      display: grid;
      grid-area: card;
      grid-gap: 1px;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      margin-top: 2rem;
    }
    .ais-Hits-item {
      background-color: var(--background);
    }
  }
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;

    ${media.lessThan("medium")`
      padding: 0.5rem 1rem;
    `}
  }
  .ais-SearchBox {
    padding-top: 6rem;

    ${media.lessThan("medium")`
      padding-top: 1rem;
    `}
  }
  .ais-Stats {
    color: #8899a6;
  }
  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid var(--borders);
    color: #8899a6;
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;
    &::placeholder {
      color: #8899a6;
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`
