import React from "react"
import * as S from "../components/Home/style"
import { Code, Computer, FavoriteBorder, LibraryBooks, Home } from "@styled-icons/material"
import { Html5, Css3, Javascript, Vuejs, Git, Wordpress, ReactLogo, Bootstrap, Figma, Less, Sass, Nodejs } from "@styled-icons/boxicons-logos"
import { Gulp } from "@styled-icons/fa-brands"
import codegirl from "../images/escuro.gif"
import GitHubCalendar from "react-github-calendar"
import ReactTooltip from "react-tooltip"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const Homepage = () => (
  <Layout>
    <SEO title="Home" />
    <img src={codegirl} className="filterImg" />
    <S.Section>
      <S.TitleHome><Home />Introdução</S.TitleHome>
      <p>
        Olá! Boas vindas. Eu sou a Amanda (◠‿◠✿)
        Gosto de compartilhar conhecimentos e ideias, por isto criei este espaço para que eu possa escrever sobre
        o que ando estudando e descobrindo. 
        Isto é um pedacinho do que estou a contruir na área da tecnologia, na qual agrega meu trabalho e também uma 
        parte de meus hobbies. Espero que goste e sinta-se a vontade para contribuir e aprender.
      </p>
    </S.Section>
    <S.Section>
      <S.TitleHome><Code /> Work</S.TitleHome>
      <S.Entry>
          <S.TimelineTitle>
            <h3>Front end Developer - Instruct</h3>
            <span>fev 2020 - até o momento</span>
          </S.TimelineTitle>
        </S.Entry>
        <S.Entry>
          <S.TimelineTitle>
            <h3>Front end Developer - Freelancer</h3>
            <span>mai 2018 - fev 2020</span>
          </S.TimelineTitle>
        </S.Entry>
        <S.Entry>
          <S.TimelineTitle>
            <h3>Suporte - Secretária municipal da educação</h3>
            <span>ago 2018 - dez 2018</span>
          </S.TimelineTitle>
        </S.Entry>
    </S.Section>
    <S.Section>
      <S.TitleHome><LibraryBooks />Estudos</S.TitleHome>
      <S.Entry>
        <S.TimelineTitle>
          <h3>IGTI - Bootcamp Devops</h3>
          <span>2020</span>
          <p>
            Atualmente estou aprendendo cada vez mais sobre DevOps, e este bootcamp do IGTI
            está me auxiliando muito em meus estudos.
          </p>
        </S.TimelineTitle>
      </S.Entry>
      <S.Entry>
        <S.TimelineTitle>
          <h3>Free Code Camp - Certifications - Front End Libraries | Responsive Web Design</h3>
          <span>2019</span>
          <p>
            O freeCodeCamp é uma capacitação internacional gratuita que aborda muitas horas de exercicios
            práticos e demanda da execução de projetos para finalização dos estudos.
            Sempre que possivel tento fazer mais exercicios por lá, fique a vontade
            para <a href="https://www.freecodecamp.org/allonsmandy" target="_blank">conferir meu perfil</a>.
          </p>
        </S.TimelineTitle>
      </S.Entry>
      <S.Entry>
        <S.TimelineTitle>
          <h3>EEEP Walter Ramos de Araújo - Técnica em informática</h3>
          <span>2016 - 2018</span>
          <p>
            O curso técnico integrado com o ensino médio me possibilitou aprender gradativamente sobre
            programação e suporte, no qual dei inicio ao desenvolvimento de meus conhecimentos principalmente
            na área de programação, aprendendo sobre lógica, sistemas operacionais, banco de dados e outras
            diversas linguagens em que tive a oportunidade de criar e manter projetos para fins acadêmicos.
          </p>
        </S.TimelineTitle>
      </S.Entry>

      <S.Divisor />

      <S.Subtitle>Cursos realizados</S.Subtitle>
      <S.List>
        <li>
          <a href="https://cursos.alura.com.br/user/allonsmandy/career/desenvolvedor-front-end/certificate" target="_blank">
            Desenvolvimento Front-End - Alura
          </a>
        </li>
        <li>
          <a href="https://cursos.alura.com.br/user/allonsmandy/career/ux-designer/certificate" target="_blank">
            UX Design - Alura
          </a>
        </li>
        <li>
          <a href="https://www.origamid.com/certificate/5edf2823/" target="_blank">
            Javascript ES6+ - Origamid
          </a>
        </li>
        <li>
          <a href="https://certificates.digitalinnovation.one/A5DE6342" target="_blank">
            Code Like a FullStack Girl - Digital Innovation One Inc.
          </a>
        </li>
        <li>
          <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-9UUPU8AP.jpg?l=null" target="_blank">
            Wordpress Completo - Udemy
          </a>
        </li>
        <li>
          <a href="https://www.udemy.com/course/js-com-tdd-na-pratica/" target="_blank">
            Javascript com TDD na prática - Udemy
          </a>
        </li>
        <li>
          <a href="https://www.origamid.com/certificate/487fe331/" target="_blank">
            VueJS - Origamid
          </a>
        </li>
      </S.List>
    </S.Section>
    <S.Section>
      <S.TitleHome><Computer />Tecnologias</S.TitleHome>
      <S.TechSkills>
        <Html5 color="#EA6227" title="HTML5" />
        <Css3 color="#3F93D4" title="CSS3" />
        <Javascript color="#EFD837" title="Javascript" />
        <Vuejs color="#55BE7B" title="VueJs" />
        <Git color="#E94E32" title="Git" />
        <Wordpress color="#117196" title="Wordpress" />
        <ReactLogo color="#45DAF5" title="React" />
        <Bootstrap color="#674197" title="Bootstrap" />
        <Figma color="#4F607D" title="Figma" />
        <Less color="#264B7D" title="Less" />
        <Sass color="#C86194" title="Sass" />
        <Nodejs color="#8CC03D" title="NodeJs (Básico)" />
        <Gulp color="#E54849" title="Gulp" />
      </S.TechSkills>
      Gosto de conhecer e aplicar em projetos: 
      <ul>
        <li>Automação front-end</li>
        <li>Arquiteturas CSS</li>
        <li>Experiência do Usuário e Desenho de Interfaces</li>
        <li>Todo ecossistema Javascript</li>
        <li>Práticas e algumas tecnologias DevOps</li>
      </ul>
    </S.Section>
    <S.Section>
      <S.TitleHome><FavoriteBorder />Interesses</S.TitleHome>
      <S.DescriptionInteresses>
        No meu tempo livre gosto 
        de <a href="https://blogimaginantes.blogspot.com/" target="_blank">escrever</a>, <a href="https://www.skoob.com.br/usuario/759321-mandy" 
        target="_blank">ler</a>, <a href="https://filmow.com/usuario/allosmandy" target="_blank">assistir filmes e séries</a>, estudar 
        sobre vários assuntos, e claro, ficar de bobeira! (─‿‿─)
      </S.DescriptionInteresses>
    </S.Section>
    <S.AboutGithub>
      <GitHubCalendar username="allonsmandy">
        <ReactTooltip delayShow={10} html />
      </GitHubCalendar>
    </S.AboutGithub>
  </Layout>
)

export default Homepage
