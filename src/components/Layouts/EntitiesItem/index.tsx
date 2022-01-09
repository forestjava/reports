import React from "react"

import styles from "./this.module.css"
import classNames from "classnames"

type Props = {
  name: string
  selected?: boolean;
  status?: string;
  onClick?: () => void
}

export const EntitiesItem: React.FC<Props> = ({ name, selected, status, onClick }) => (
  <button className={classNames([styles.item, selected && styles.selected, status && styles[status]])} onClick={onClick} title={name}>
    { name }
  </button>
)
