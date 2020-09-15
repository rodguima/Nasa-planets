import React from "react"

import Layout from "../components/layout"
import Main from "../components/main"

function IndexPage({ pageContext }) {

  // console.log('context', pageContext)

  return (
    <Layout url={pageContext.result.url}>
      <Main title={pageContext.result.title} date={pageContext.result.date}/>
    </Layout>
  )
}

export default IndexPage

