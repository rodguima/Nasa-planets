/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fetch = require("node-fetch")

exports.createPages = async ({ actions: { createPage } }) => {
  const dates = ["2020-08-30", "2020-08-29"]
  const results = []

  for (let date of dates) {
    console.log("date", date)
    const data = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
    )
    const json = await data.json()
    results.push(json) //json jogou todos os dados para dentro do array
  }

  console.log("results", results)

  results.map(res =>
    createPage({
      path: `/${res.date}`,
      component: require.resolve("./src/pages/index.js"),
      context: {
        result: res,
      },
    })
  )
}
