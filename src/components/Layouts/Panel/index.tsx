import React from "react";
import { Column } from "../Flex";

import styles from "./this.module.css"

export const Panel: React.FC = ({ children }) => (
  <Column className={styles.panel}>
    { children }
  </Column>  
)