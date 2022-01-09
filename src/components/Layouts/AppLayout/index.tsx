import React from 'react'
import styles from './this.module.css'
import logo from './logo.svg'
import expand from "./expand.svg"

import { NavBar } from '../../Molecules/NavBar'
import { Logged } from '../../Molecules/Logged'
import { Column, Row } from '../Flex'
import { useUI } from '../../../states'
import { observer } from 'mobx-react-lite'

import { ReportsNavigator } from '../../Molecules/ReportsNavigator'
import classNames from 'classnames'
import { Button } from '../../Atoms/Button'

export const AppLayout: React.FunctionComponent = observer(({ children }) => {
  const { app, user } = useUI()
  const isAdmin = app.mode == 'admin'
  const title = isAdmin ? 'Admin service' : 'Report panel'

  return (
    <>
      <Row tag="header" className={styles.header}>
        <Row className={styles.left}>
          <img src={logo} />
          <h2>{ title }</h2>
        </Row>
        <Row className={styles.right}>
          {isAdmin ? <NavBar /> : <nav />} {/* empty nav element should exist */}
          <Logged />
        </Row>
      </Row>
      <Row tag="section" className={styles.content}>
        <Column className={classNames([styles.left, user.compact && styles.compact])}>
          {user.iframes && !user.compact && <ReportsNavigator /> }
          {user.compact && <Button variant="primary" className={classNames([styles.expand, isAdmin && styles.admin])} onClick={() => user.arrange(false)}><img src={expand} /></Button>}
        </Column>
        <Column className={styles.right}>
          { children }
        </Column>
      </Row>
    </>
  )
})
