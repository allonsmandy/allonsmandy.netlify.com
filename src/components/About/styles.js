import styled from "styled-components"

export const Timeline = styled.section`
  max-width: 357px;
  display: flex;
  flex-direction: column;
  padding: 5px 21px 21px 4px;  
  position: relative;
  background: #231d29;
  box-shadow: 2px 1px 10px 1px #767888;
  border-radius: 10px;

  strong {
    position: relative;
    left: 15px;
    top: 15px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 57px;
    left: 341px;
    height: 215px;
    bottom: 0px;
    width: 4px;
    background: var(--post);
  }
`

export const Section = styled.section`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    position: relative;
    top: 2px;
    width: 23px;
  }
`
export const Entry = styled.div`
  text-align: left;
  position: relative;
  margin-bottom: 1.2rem;
`

export const TimelineTitle = styled.div`
  margin-bottom: 0.5em;
  width: 100%;
  text-align: right;
  position: relative;
  padding-right: 15px;

  &:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border: 4px solid salmon;
    background-color: #fff;
    border-radius: 100%;
    top: 15%;
    right: -15px;
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
  width: 200px;
  margin: 0 auto;
  text-align: center;

  &:hover {
    background: var(--secondary);
  }
`

export const AboutSkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* grid-template-columns: 1fr 1fr; */
`

export const AboutSubtitle = styled.strong`
  display: block;
  color: var(--maiscor);
  padding: 1rem 0;
  text-align: center;
  margin-bottom: 7px;
  text-transform: uppercase;
  position: relative;
  left: 18px;
  /* font-family: sans-serif; */
/* 
  &:after {
    content: "";
    display: block;
    margin: 0.3rem auto;
    width: 15px;
    height: 2px;
    background: var(--algo);
  } */
`

export const AboutEducation = styled.div`
    color: var(--postColor);
    display: flex;
    flex-direction: column;
    
    ul {
      list-style: none;
      position: relative;
      right: 15px;
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
  padding: 0.225rem 0;
  color: var(--secondary);
  list-style-type: none;
  text-align: center;

  & > ul {
    margin-bottom: 0;
  }

  /* span::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    background: var(--secondary);
    margin-right: 5px;
    border-radius: 50%;
    box-shadow: 1px 1px 0px 3px var(--algo);
    margin-right: 20px;
  } */
  
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
    line-height: 1.7;

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
