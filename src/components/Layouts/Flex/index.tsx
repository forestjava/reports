import React from "react"
import styles from "./this.module.css"
import classNames from "classnames"

type Props = {
  tag?: string;
  className?: string;
  justify?: string;
  align?: string;
}

// TODO realize tag, especially <form> PPBAE-193

export const Row: React.FC<Props> = ({ className, justify, align, children }) => (
  <div className={classNames([styles.flex, styles.row, justify && styles['justify-' + justify], align && styles['align-' + align], className])}>
    { children }
  </div>  
)

export const Column: React.FC<Props> = ({ className, justify, align, children }) => (
  <div className={classNames([styles.flex, styles.column, justify && styles['justify-' + justify], align && styles['align-' + align], className])}>
    { children }
  </div>  
)
