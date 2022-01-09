import { observer } from "mobx-react-lite"
import { useQuery } from "react-query"
import { API } from "../../../data/API"
import { ReportType } from "../../../data/types"
import { useUI } from "../../../states"

import styles from "./this.module.css"

export const ReportIFrame = observer(() => {
  const { user } = useUI()
  const id = user.tabs[user.selected].id 
  const { data = {} } = useQuery<ReportType>(["reports", id], API.getReport(id)) 

  console.log('ReportIFrame:', data.link)

  // TODO PPBAE-56 keep (don't clear, don't reset, don't re-render) all the open iframes
  return <iframe className={styles.iframe} src={data.link} />
})
