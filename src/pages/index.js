import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h2>I am a developer living in California</h2>
      <p>
        Need a developer? <a href="/contact ">Contact me</a>
      </p>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}
export default IndexPage
