import classNames from "classnames";
import { Column } from "../../Layouts/Flex";

import styles from './this.module.css' 

type Props = {
  className?: string
}

export const Popover: React.FC<Props> = ({ className, children }) => (
  <Column className={classNames([styles.popover, className])}>
    { children }
  </Column>      
)
