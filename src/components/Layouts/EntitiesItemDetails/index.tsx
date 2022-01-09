import React from "react";
import { Column, Row } from "../../Layouts/Flex";
import { Button } from "../../Atoms/Button";

import cross from "./close.svg";

import styles from "./this.module.css"
import classNames from "classnames";

import { ButtonMore } from "../../Atoms/ButtonMore";
import { observer } from "mobx-react-lite";

type Data = {
  id?: string;
  name?: string;
  relations?: {
    id: string;
    name: string;
  }[]
}

type Props = {
  className?: string;
  data: Data
  onEdit: () => any
  onDelete: () => any
  onClose: () => any
  children: React.ReactNode
}

export const EntitiesItemDetails: React.FC<Props> = ({ className, data, onEdit, onDelete, onClose, children }) => {
  return (
    <Column className={classNames([styles.box, className])}>
      <Row className={styles.header} align="center">
        <h3 title={data.name}>{ data.name }</h3>
        <ButtonMore onEdit={onEdit} onDelete={onDelete} />
        <Button variant="ghost" onClick={onClose}><img src={cross}/></Button>
      </Row>
      <Column className={styles.relations} >
        { children }
      </Column>    
    </Column>
  )
}
