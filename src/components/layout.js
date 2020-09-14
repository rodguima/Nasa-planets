import React from "react"

import Header from "./header"
import Footer from "./footer"
import layoutStyles from "./layout.module.scss"
import "../styles/index.scss"

function Layout(props) {
  return (
    <>
      <Header />
      <section className={layoutStyles.bg}>{props.children}</section>
      <Footer />
    </>
  )
}

export default Layout
