import React from "react"
import { AiOutlineInfoCircle } from 'react-icons/Ai';
import { BiLeftArrow } from 'react-icons/Bi';

import footerStyles from "./footer.module.scss"

function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <div className={footerStyles.prev}>
        <span className={footerStyles.spanLeft}><BiLeftArrow /></span>
          <p>Yesterday's Picture</p>
        </div>
        <div className={footerStyles.expl}>
          <p>Today's Picture Explanation</p>
        <span className={footerStyles.spanRight}><AiOutlineInfoCircle /></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
