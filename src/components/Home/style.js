import styled from "styled-components"

export const Section = styled.section`
  background-color: var(--mediumBackground);
  color: var(--post);
  margin: 10px;
  padding: 1rem;
  line-height: 1.5;
  border: 1px solid var(--borders);
`

export const TitleHome = styled.h2`
  font-size: 1.8rem;
  color: var(--outracor);
  padding: 1rem 1rem 0;

  svg {
    width: 35px;
    position: relative;
    bottom: 3px;
    margin-right: 15px;
  }
`

export const Entry = styled.div`
  margin-bottom: 1.2rem;
`

export const TimelineTitle = styled.div`
  margin-bottom: 0.5em;
  width: 100%;
  position: relative;

  h3 {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    color: var(--texts);
  }

  span {
    margin: 0;
    font-size: 0.8rem !important;
    color: var(--highlight);
  }
`

export const Divisor = styled.div`
    width: 100%;
    background: var(--borders);
    height: 1px;
    margin: 10px 0;
`

export const List = styled.ul`
  a {
    color: var(--secondary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

`

export const Subtitle = styled.span`
  color: var(--highlight);
  font-size: 1.5rem;
`

export const TechSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
    svg {
        border: 1px solid var(--borders);
        padding: 10px;
        border-radius: 50%;
        color: ${props => (props.color)};
        margin-right: 10px;
        width: 60px;
        height: 60px
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

export const DescriptionInteresses = styled.p`
  a {
    text-decoration: none;
    color: var(--secondary);

    &:hover {
      text-decoration: underline;
    }
  }
`