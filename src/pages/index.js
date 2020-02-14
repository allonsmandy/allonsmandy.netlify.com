import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import GlobalStyles from "../styles/global"
import SEO from "../components/seo"

import img from "../images/computergirl.gif"

const ImagemWrapper = styled.section`
  img {
    height: 100vh;
  }

  a {
    position: absolute;
    top: 50px;
    left: 50px;
    padding: 1rem 2rem;
    background: pink;
  }
`

const InicioPage = () => (
  <ImagemWrapper className="home">
    <GlobalStyles />
    <SEO title="Inicio" />
    <img src={img} />
    <Link to="/blog">Entre no meu mundinho</Link>
  </ImagemWrapper>
)

export default InicioPage
