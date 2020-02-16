import styled from "styled-components"

export const AboutTitle = styled.h1`
  color: #c5aec5;
  font-size: 2.8rem;
  padding: 0 1rem;
  position: absolute;
  font-family: monospace;
  top: 10px;
  font-weight: 100;
`

export const AboutImg = styled.img`
  filter: var(--filter);
`

export const AboutSkillsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const AboutSubtitle = styled.strong`
  display: block;
  color: var(--maiscor);
  padding: 1rem 0;
  text-align: center;
  text-transform: uppercase;
  font-family: sans-serif;

  &:after {
    content: "";
    display: block;
    margin: 0.6rem auto;
    width: 100px;
    height: 2px;
    background: var(--algo);
  }
`

export const AboutGithub = styled.div`
  padding: 1rem 2rem;
  display: flex;

  .react-github-calendar__title {
    color: var(--maiscor);
  }

  .react-github-calendar__chart {
    color: var(--texts);
  }

  svg.react-github-calendar__calendar text {
    fill: var(--postColor) !important;
  }

  .react-github-calendar {
    margin: 0 auto;
  }
`

export const AboutSkillsListItem = styled.li`
  padding: 0.325rem 0;
  color: var(--secondary);
  & > ul {
    margin-bottom: 0;
  }
`

export const AboutDescription = styled.div`
  display: flex;
  margin: 1rem 0.5rem;

  img {
    padding: 0.6rem;
    height: 300px !important;
    width: 250px !important;
    box-shadow: -15px -10px 0px var(--texts);
  }

  p {
    color: var(--postColor);
    line-height: 1.4;

    a {
      border-bottom: 1px dashed var(--texts);
      color: var(--texts);
      text-decoration: none;
      transition: opacity 0.5s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`
