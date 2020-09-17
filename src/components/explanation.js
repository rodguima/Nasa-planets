import React, { Component } from "react"

import { AiOutlineInfoCircle } from "react-icons/Ai"
import { AiOutlineCloseCircle } from "react-icons/Ai"
import styleExp from "./explanation.module.scss"

class Explanation extends Component {
  state = {
    isOpen: false,
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <>
        <section
          className={
            this.state.isOpen ? styleExp.expContainer : styleExp.expHide
          }
        >
          <div className={styleExp.explanation}>
            <h3>Explanation</h3>
            <p className={styleExp.expText}>{this.props.exp}</p>

            <button className={styleExp.closeBtn} onClick={this.handleToggle}>
              <p>Close</p>
              <span className={styleExp.spanClose}>
                <AiOutlineCloseCircle />
              </span>
            </button>
          </div>
        </section>

        <button className={styleExp.footerBtnRight} onClick={this.handleToggle}>
          <p className={styleExp.footerP}>Today's Picture Explanation</p>
          <span className={styleExp.spanRight}>
            <AiOutlineInfoCircle />
          </span>
        </button>
      </>
    )
  }
}

export default Explanation
