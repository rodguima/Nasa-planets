import React from "react"

import mainStyles from "./main.module.scss"

function Main(props) {
  return (
    <section>
      <div className={mainStyles.container}>
        <div className={mainStyles.content}>
          <div className={mainStyles.date}>
            <h3>{props.date}</h3>
          </div>
          <div className={mainStyles.title}>
            <h1>{props.title}</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main
