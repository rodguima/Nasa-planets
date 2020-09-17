import React from "react"

import Layout from "../components/layout"
import Main from "../components/main"
import Explanation from "../components/explanation"

function IndexPage({ pageContext, }) {
  // console.log('context', pageContext)

  return (
    <Layout url={pageContext.result.url}>
      <Main title={pageContext.result.title} date={pageContext.result.date} />
      <Explanation exp={pageContext.result.explanation} />
    </Layout>
  )
}

export default IndexPage
