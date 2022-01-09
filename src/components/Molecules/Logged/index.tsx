import React from 'react'
import { Button } from '../../Atoms/Button'
import { Popover } from '../../Atoms/Popover'

import styles from './this.module.css' 
import arrow from './arrow.svg'

export const Logged = () => {
  const [open, setOpen] = React.useState(false)

  const logout = () => {
    console.log('TODO: logout') // PPBAE-195
  }

  return (
    <Button rc variant="ghost" className={styles.swither} onClick={() => setOpen(!open)}>
      <span>user name</span>
      <img className={ open ? styles.rotated : '' } src={arrow} />
      {open && 
        <Popover className={styles.popover}>
          <Button variant="menu" onClick={logout}>Log out</Button> {/* TODO fix Warning: validateDOMNesting(...): <button> cannot appear as a descendant of <button>. PPBAE-192 */}
        </Popover>
      }
    </Button>
  ) 
}
