import styled from "styled-components"

export const SnippetsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
`

export const SnippetsWrapper = styled.article`
    background-color: var(--secondary);
    border-radius: 4px;
    margin: 0 1.4rem 1.4rem 1.4rem;
    padding: 0.8rem;
    width: 45%;
    overflow-y: scroll;
    height: 300px;
`

export const SnippetsTitlePage = styled.h1`
  color: var(--texts);
`

export const SnippetsDescriptionPage = styled.p`
  color: var(--texts);
  padding: 0 1.4rem !important;
  margin-bottom: 1.4rem;
`

export const SnippetsTitle = styled.h2`
  color: var(--background);
  font-size: 1rem;
  padding: 0;
  margin-bottom: 5px;
`

export const SnippetsDescription = styled.p`
  color: var(--background);
`
