import styled from "styled-components"

export const IconsAboutWrapper = styled.section`
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  background: var(--outracor);
  list-style: none;
`

export const IconsAboutCard = styled.div`
  margin: 5px;
  text-align: center;
  padding: 1rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
`

export const IconsAboutTitle = styled.h2`
  color: var(--background);
  font-size: 1.5rem;
  text-transform: uppercase;
  /* font-family: sans-serif; */
  margin-bottom: 0.4rem;
`

export const IconsAboutDescription = styled.p`
  line-height: 1.3;
  color: var(--highlight);
`

export const IconWrapper = styled.div`
  color: var(--texts);
  margin: 0 auto;
  width: 60px;
  height: 60px;
`
