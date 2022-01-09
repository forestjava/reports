import classNames from "classnames"
import { NavLink } from "react-router-dom"
import { Row } from "../../Layouts/Flex"
import styles from "./this.module.css"

const links: {[url: string]: string} = {
  roles: "User roles management",
  reports: "Reports management",
  panel: "Report panel",
}

export const NavBar = () => (
 <Row className={styles.nav}>
    {Object.keys(links).map(url => (
      <NavLink 
        key={url} 
        className={props => classNames([styles.link, props.isActive && styles.active])} 
        to={url}>
        {links[url]}
      </NavLink>
    ))}
  </Row>
)