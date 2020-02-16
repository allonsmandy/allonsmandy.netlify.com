import React from "react"
import GitHubCalendar from "react-github-calendar"
import ReactTooltip from "react-tooltip"

import * as S from "../components/About/styles"
import Layout from "../components/Layout"
import IconsAbout from "../components/IconsAbout"
import img from "../images/escuro.gif"
import Eu from "../images/eu.jpg"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <S.AboutImg src={img} />
    <S.AboutTitle>Sobre mim...</S.AboutTitle>
    <S.AboutDescription>
      <p>
        Olá, meu nome é <strong>Amanda</strong> mas pode me chamar de Mandy!
        Tenho 19 anos (22/06/2000) e gosto de muitas coisas! <br /> Amo ler,
        tenho uma mini biblioteca com vários livros sobre poesia, fantasia e
        filosóficos. Comecei este meu gosto desde a infancia através de gibis.
        Aleḿ disso, escrever também é uma paixao que tenho bastante apreço.
        Escrevo umas bobagens pelo{" "}
        <a href="https://blogimaginantes.blogspot.com.br/" target="__blank">
          Imaginantes
        </a>
        , tanto sobre poesias, contos de fantasia, como também sobre
        conhecimentos diversos na qual amo estudar. <br /> Sou uma moça das
        artes e também da tecnologia, gosto de programaçao, especialmente{" "}
        <strong>front-end</strong>, pois adoro a possibilidade de criar projetos
        e desenvolvê-los atendendo minhas preces de criatividade. <br />{" "}
        Leonardo da Vinci me inspira muito, assim como Van Gogh. Sempre que
        posso vou capturando o que há de melhor nas pessoas, e assim vou me
        estruturando e se inspirando por este mundinho! ^^ <br /> Gosto de ser
        útil e sempre me esforço ao máximo para fazer as coisas darem certo.{" "}
        <br /> <br />
        <strong>Não julga meu site, eu amo cores!!! </strong>
      </p>
      <img src={Eu} style={{ height: 350 + "px", width: 300 + "px" }} />
    </S.AboutDescription>
    <IconsAbout />
    <S.AboutSubtitle>Tecnologias que utilizo</S.AboutSubtitle>
    <S.AboutSkillsList>
      <S.AboutSkillsListItem>HTML5</S.AboutSkillsListItem>
      <S.AboutSkillsListItem>CSS3</S.AboutSkillsListItem>
      <S.AboutSkillsListItem>Javascript ES6+</S.AboutSkillsListItem>
      <S.AboutSkillsListItem>Gulp</S.AboutSkillsListItem>
      <S.AboutSkillsListItem>Pre-Processadores CSS</S.AboutSkillsListItem>
      <S.AboutSkillsListItem>Arquitetura CSS</S.AboutSkillsListItem>
      <S.AboutSkillsListItem>React / Redux</S.AboutSkillsListItem>
      <S.AboutSkillsListItem>Vuejs / Vuex</S.AboutSkillsListItem>

      <S.AboutSkillsListItem>Git</S.AboutSkillsListItem>
      <S.AboutSkillsListItem>Wordpress / WooCommerce</S.AboutSkillsListItem>
      <S.AboutSkillsListItem>Noções de UI / UX</S.AboutSkillsListItem>
      <S.AboutSkillsListItem>Prototipação (Figma) </S.AboutSkillsListItem>
      <S.AboutSkillsListItem>Nodejs Básico</S.AboutSkillsListItem>
    </S.AboutSkillsList>
    <S.AboutSubtitle>
      Tecnologias que quero aprender futuramente e me aprofundar...
    </S.AboutSubtitle>
    <S.AboutSkillsList>
      <S.AboutSkillsListItem>Devops</S.AboutSkillsListItem>
      <S.AboutSkillsListItem>Python</S.AboutSkillsListItem>
      <S.AboutSkillsListItem>Graphql</S.AboutSkillsListItem>
      <S.AboutSkillsListItem>
        React Native (em processo de aprendizagem)
      </S.AboutSkillsListItem>
    </S.AboutSkillsList>

    <S.AboutGithub>
      <GitHubCalendar username="allonsmandy">
        <ReactTooltip delayShow={50} html />
      </GitHubCalendar>
    </S.AboutGithub>
  </Layout>
)

export default AboutPage
