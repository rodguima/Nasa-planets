import React from "react"

import mainStyles from "./main.module.scss"

function Main() {
  return (
    <section>
      <div className={mainStyles.container}>
        <div className={mainStyles.content}>
          <div className={mainStyles.date}>
            <h3>11-09-2020</h3>
          </div>
          <div className={mainStyles.title}>
            <h1>The Reappearance of Mars</h1>
            <h5>Photo by: David Duarte</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main
