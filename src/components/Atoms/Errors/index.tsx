import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { useUI } from "../../../states"
import { Column } from "../../Layouts/Flex"

import styles from './this.module.css'

export const Errors = observer(() => {
  const { errors } = useUI()
  return (
    <Column className={styles.toasts}>
      { errors.toasts.map(toast =>
        <span className={styles.toast}>{toast}</span> 
      )}
    </Column>
  )  
})
