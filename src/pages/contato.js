import React from "react"
import * as S from "../components/Contato/styles"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const Contato = () => (
  <Layout>
    <SEO title="Contato" />
    <S.Title style={{ color: "#bda9ac" }}>Entre em contato</S.Title>
    <S.Form>
      <S.FormItem>
        <S.Label for="name">Nome</S.Label>
        <S.Input type="text" id="name" name="name" />
      </S.FormItem>

      <S.FormItem>
        <S.Label for="email">Email</S.Label>
        <S.Input type="text" id="email" name="email" />
      </S.FormItem>

      <S.FormItem>
        <S.Label for="message">Sua mensagem</S.Label>
        <S.Message id="message"></S.Message>
      </S.FormItem>
      <S.BotaoEnviar
        onClick={e => {
          e.preventDefault()
          console.log("opa")
        }}
      >
        Enviar mensagem
      </S.BotaoEnviar>
    </S.Form>
  </Layout>
)

export default Contato
