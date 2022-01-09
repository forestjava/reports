import React from "react";
import { Column } from "../Flex";
import { EntitiesItem } from "../EntitiesItem";

import styles from "./this.module.css"
import classNames from "classnames";
import { observer } from "mobx-react-lite";

type List = {
  id: string;
  name: string;
  status: string;
}[]

type Props = {
  className?: string;
  data: List;
  isSelected?: (id: string) => boolean;
  onSelect?: (id: string, name: string) => any
}

export const EntitiesList: React.FC<Props> = observer(({ className, data, isSelected, onSelect }) => (
  <Column className={classNames([styles.list, className])} >
    { data.map(item =>
      <EntitiesItem
        key={item.id} 
        name={item.name}
        selected={isSelected && isSelected(item.id)}
        status={item.status} 
        onClick={onSelect && (() => onSelect(item.id, item.name))} 
      />
    )}
  </Column>
))
