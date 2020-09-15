import React from "react"

import Header from "./header"
import Footer from "./footer"
// import layoutStyles from "./layout.module.scss"
import "../styles/index.scss"

function Layout(props) {

  const styleBg = {
    background: `url("${props.url}") center no-repeat`,
    backgroundSize: "cover",
    width: 100 + "vw",
    height: 100 + "vh",
  }

  return (
    <>
      <Header />
      <section style={ styleBg }>{props.children}</section>
      <Footer />
    </>
  )
}

export default Layout
