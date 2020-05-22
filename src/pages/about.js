import React from "react"
import GitHubCalendar from "react-github-calendar"
import ReactTooltip from "react-tooltip"

import * as S from "../components/About/styles"
import Layout from "../components/Layout"
import IconsAbout from '../components/IconsAbout'
import { FaHeart, FaLaptopCode, FaBook, FaCheck } from 'react-icons/fa'
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1 className="titlePage">Sobre mim</h1>
    <S.AboutDescription>
      <p>
        Olá! Meu nome é Amanda (◠‿◠✿) <br />
        Criei este site para compartilhar conteúdos sobre tecnologia, principalmente sobre o que ando estudando, testando e descobrindo. Sinta-se a
        vontade para contribuir e mandar sugestões. Espero poder ajudar alguem com o que escrevo por aqui. <br />
        Estou no começo da minha carreira, mas fico feliz por já estar envolvida com a tecnologia a um tempinho.<br />
        Durante a infância, preferia ir a Lan House do que ir na Locadora onde tinha os videogames,
        tanto pelo fato de preferir descobrir cada vez mais o mundo tão expansivo da internet, como também porque lá tinha bem menos gente hehe (─‿‿─)  <br />
        Foi a partir do Orkut que encontrei a plataforma do Blogger, e a partir dai passei vários anos desde a adolescencia inserida nesse mundinho
        de elaborar sites e mexer com HTML e CSS. Porém, era apenas hobbie. Não sabia que poderia evoluir a ponto de se tornar minha profissão.
        Entrei no Ensino Médio integrado com Técnico de Informática com 15 anos, e dai em diante comecei a desenvolver e entender bem melhor sobre as bases
        da programação, praticando a lógica e realizando diversos projetos. <br />
        Desde então, ando sempre estudando e descobrindo algo novo, expandindo minhas ideias, programando, errando e sempre aprendendo algo novo.
        Atualmente, meu foco na programação é justamente aprimorar cada vez mais minhas skills de Front-end, porém tenho interesses diversos na área de tecnologia,
        indo de Devops até Inteligencia Artificial.
      </p>
    </S.AboutDescription>

    {/* <IconsAbout /> */}

    <S.Section>
      <div>
        <S.AboutSubtitle> <FaHeart /> Skills </S.AboutSubtitle>
        <S.AboutSkillsList>
          <S.AboutSkillsListItem>
            <span>HTML5</span>
          </S.AboutSkillsListItem>
          <S.AboutSkillsListItem>
            <span>CSS3</span>
          </S.AboutSkillsListItem>
          <S.AboutSkillsListItem>
            <span>Javascript ES6+</span>
          </S.AboutSkillsListItem>
          <S.AboutSkillsListItem>
            <span>Gulp</span>
          </S.AboutSkillsListItem>
          <S.AboutSkillsListItem>
            <span>Pre-Processadores CSS</span>
          </S.AboutSkillsListItem>
          <S.AboutSkillsListItem>
            <span>Arquitetura CSS</span>
          </S.AboutSkillsListItem>
          <S.AboutSkillsListItem>
            <span>React / Redux</span>
          </S.AboutSkillsListItem>
          <S.AboutSkillsListItem>
            <span>Vuejs / Vuex</span>
          </S.AboutSkillsListItem>

          <S.AboutSkillsListItem>
            <span>Git</span>
          </S.AboutSkillsListItem>
          <S.AboutSkillsListItem>
            <span>Wordpress / WooCommerce</span>
          </S.AboutSkillsListItem>
          <S.AboutSkillsListItem>
            <span>Noções de UI / UX</span>
          </S.AboutSkillsListItem>
          <S.AboutSkillsListItem>
            <span>Prototipação (Figma) </span>
          </S.AboutSkillsListItem>
          <S.AboutSkillsListItem>
            <span>Nodejs Básico</span>
          </S.AboutSkillsListItem>
        </S.AboutSkillsList>
      </div>

      <S.Timeline>
        <S.AboutSubtitle><FaLaptopCode /> Work </S.AboutSubtitle>
        <S.Entry>
          <S.TimelineTitle>
            <h3>Front end Developer - Instruct</h3>
            <p>fev 2020 - até o momento</p>
          </S.TimelineTitle>
        </S.Entry>
        <S.Entry>
          <S.TimelineTitle>
            <h3>Front end Developer - Freelancer</h3>
            <p>mai 2018 - fev 2020</p>
          </S.TimelineTitle>
        </S.Entry>
        <S.Entry>
          <S.TimelineTitle>
            <h3>Suporte - Secretária municipal da educação</h3>
            <p>ago 2018 - dez 2018</p>
          </S.TimelineTitle>
        </S.Entry>
      </S.Timeline>
    </S.Section>

    <S.AboutEducation>
      <S.AboutSubtitle><FaBook /> Education</S.AboutSubtitle>

      <ul>
        <li><a data-tip="Técnico de Informática"> <FaCheck /> EEEP Walter Ramo de Araújo </a></li>
        <li>
          <a data-tip data-for="freeCodeCamp"> <FaCheck /> freeCodeCamp </a>
          <ReactTooltip id='freeCodeCamp' aria-haspopup='true' >
            - Responsive Web Design <br />
            - Front End Libraries Certification
       </ReactTooltip>
        </li>
      </ul>

      <S.btnDownload href="https://resume.io/r/52EFAw2F7" target="_blank">
        Ver curriculo
    </S.btnDownload>
    </S.AboutEducation>

    <S.AboutGithub>
      <GitHubCalendar username="allonsmandy">
        <ReactTooltip delayShow={50} html />
      </GitHubCalendar>
    </S.AboutGithub>
  </Layout >
)

export default AboutPage
