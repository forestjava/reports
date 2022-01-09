import { observer } from "mobx-react-lite"
import { useUI } from "../../states"

import { AddReportModal } from "./AddReportModal"
import { EditReportModal } from "./EditReportModal"
import { DeleteReportModal } from "./DeleteReportModal"
import { AddRoleModal } from "./AddRoleModal"
import { EditRoleModal } from "./EditRoleModal"
import { DeleteRoleModal } from "./DeleteRoleModal"

import styles from "./this.module.css"
import classNames from "classnames"

export const Modals = observer(() => {
  const { modals, reports } = useUI()

  const component = (id: string) => {
    switch (id) {
      case 'add report': return <AddReportModal />
      case 'edit report': return <EditReportModal />
      case 'delete report': return <DeleteReportModal />
      case 'add role': return <AddRoleModal />
      case 'edit role': return <EditRoleModal />
      case 'delete role': return <DeleteRoleModal />
      default: throw new Error(`Action "${id}" is not realized `)
    }
  }

  return (
      <>
        { modals.active && <div className={classNames([styles.fullscreen, styles.underlay])}/> }
        { modals.active && <div className={classNames([styles.fullscreen, styles.overlay])}>
          { component(modals.action) }
        </div> }
      </>
  )
})