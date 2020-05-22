import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import GlobalStyles from "../styles/global"
import SEO from "../components/seo"

import img from "../images/computergirl.gif"

const ImagemWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  background: url(${img}) center/cover no-repeat;
  /* filter: grayscale(0.6); */
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding: 1.3rem 2rem;
    position: relative;
    margin: auto;
    transition: all 0.2s ease;
    text-decoration: none;
    color: #ccc;
    /* font-family: sans-serif; */

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      border-radius: 28px;
      background: rgba(255, 171, 157, 0.5);
      width: 56px;
      height: 56px;
      transition: all 0.3s ease;
    }
    span {
      position: relative;
      font-size: 16px;
      line-height: 18px;
      font-weight: 900;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      vertical-align: middle;
    }
    svg {
      position: relative;
      top: 0;
      margin-left: 10px;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke: #111;
      stroke-width: 2;
      transform: translateX(-5px);
      transition: all 0.3s ease;
      &:hover {
        transform: translateX(0);
      }
    }
    &:hover:before {
      width: 100%;
      background: #6c3a6b;
    }

    &:active {
      transform: scale(0.96);
    }
  }
`

const InicioPage = () => (
  <ImagemWrapper className="home">
    <GlobalStyles />
    <SEO title="Inicio" />
    <Link to="/blog">
      <span>Acessar</span>
      <svg width="13px" height="10px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </Link>
  </ImagemWrapper>
)

export default InicioPage
