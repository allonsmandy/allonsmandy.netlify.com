import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import img from "../images/computergirl.gif"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <img src={img} />
  </Layout>
)

export default AboutPage
