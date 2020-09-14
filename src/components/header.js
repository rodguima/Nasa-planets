import React from "react"

import NasaLogo from "../images/nasa-logo.png"
import NasaRedLogo from "../images/nasa-red-logo.png"
import headerStyles from "./header.module.scss"

function Header() {
  return (
    <header>
      <nav className={headerStyles.nav}>
        <div className={headerStyles.logo}>
          <a href="/#">
            <img src={NasaLogo} alt="logo" className={headerStyles.imgLogo} />
          </a>
        </div>

        <ul className={headerStyles.navLinks}>
          <li className={headerStyles.navLink}>
            <a href="/#" className={headerStyles.navItem}>
              search by date
            </a>
          </li>
          <li className={headerStyles.navLink}>
            <a href="/#" className={headerStyles.navItem}>
              picture of the day
            </a>
          </li>

          <li className={headerStyles.navLink}>
            <a href="/#" className={headerStyles.navItem}>
              about
              <img
                src={NasaRedLogo}
                alt="Nasa Red Logo"
                className={headerStyles.nasaBtn}
              />
            </a>
          </li>
        </ul>
      </nav>
      <div className={headerStyles.line}></div>
    </header>
  )
}

export default Header
