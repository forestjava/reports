import React from "react"

import classNames from "classnames"
import styles from "./this.module.css"

type Props = {
  variant: "primary" | "secondary" | "ghost" | "menu"
  rc?: boolean; // relative positioned because can contain an absolute positioned popover content 
  className?: string;
  onClick?: (args: any) => any;
  children: React.ReactNode
}

export const Button: React.FC<Props> = ({ variant, rc, className, onClick, children }) => (
  <button className={classNames([styles.button, styles[variant], rc && styles.rc, className])} onClick={onClick}>
    { children }
  </button>  
)