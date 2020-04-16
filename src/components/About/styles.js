import styled from "styled-components"

export const Timeline = styled.section`
  max-width: 320px;
  padding: 5px 40px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: 19rem;
    bottom: 0px;
    width: 4px;
    background: var(--post);
  }
`

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Entry = styled.div`
  text-align: left;
  position: relative;
  margin-bottom: 1.2rem;
`

export const TimelineTitle = styled.div`
  margin-bottom: 0.5em;
  width: 107%;
  text-align: right;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border: 4px solid salmon;
    background-color: #fff;
    border-radius: 100%;
    top: 15%;
    right: -18px;
    z-index: 99;
  }

  h3 {
    margin: 0;
    font-size: 1rem;
    color: var(--texts);
  }

  p {
    margin: 0;
    font-size: 100%;
    color: var(--highlight);
  }
`

export const btnDownload = styled.a`
  color: var(--mediumBackground);
  text-decoration: none;
  background: var(--texts);
  border: 1px solid var(--postColor);
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background: var(--secondary);
  }
`

export const AboutSkillsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
    margin: 0.3rem auto;
    width: 15px;
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
  list-style-type: none;
  & > ul {
    margin-bottom: 0;
  }

  span::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    background: var(--secondary);
    margin-right: 5px;
    border-radius: 50%;
    box-shadow: 1px 1px 0px 3px var(--algo);
    margin-right: 20px;
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
