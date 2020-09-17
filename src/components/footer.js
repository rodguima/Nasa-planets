import React, { Component } from "react"

import { BiLeftArrow } from "react-icons/Bi"

import footerStyles from "./footer.module.scss"

class Footer extends Component {
  render() {
    return (
      <footer className={footerStyles.footer}>
        <div className={footerStyles.container}>
          <div className={footerStyles.footerBtnLeft}>
            <span className={footerStyles.spanLeft}>
              <BiLeftArrow />
            </span>
            <p className={footerStyles.footerP}>Yesterday's Picture</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
