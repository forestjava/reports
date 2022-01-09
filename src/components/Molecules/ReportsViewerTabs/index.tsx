import { observer } from "mobx-react-lite"

import { useUI } from "../../../states"
import { Button } from "../../Atoms/Button"
import { Row } from "../../Layouts/Flex"

import styles from "./this.module.css"
import close from "./close.svg"
import closeGray from "./close_gray.svg"

import classNames from "classnames"

export const ReportsViewerTabs = observer(() => {
  const { user } = useUI()

   return (
     <Row tag="ul" className={styles.tabs}>
       { user.tabs.map((tab, i) => {
          const selected = i == user.selected;
          return (
            <Row tag="li" key={tab.id} className={classNames([styles.tab, selected && styles.selected ])} align="center"> 
              <h4 onClick={() => user.select(i)} className={styles.name}>{ tab.name }</h4>
              <Button variant="ghost" onClick={() => user.close(i)} className={styles.close}>
                <img src={selected ? close : closeGray}/>
              </Button>
            </Row> 
          )
       })}
     </Row>
   )
})
