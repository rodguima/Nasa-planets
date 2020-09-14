import React from "react"

import Layout from "../components/layout"
import Main from "../components/main"

const IndexPage = ({ pageContext }) => {
  console.log(pageContext)
  return (
    <Layout>
      <Main />
    </Layout>
  )
}

export default IndexPage

/* <Layout url={url}>
    {/* <div>{pageContext.result}</div> */
// <Main title={title} date={date} explanation={explanation} />
