import { observer } from "mobx-react-lite"

import { useQuery } from "react-query"
import { API } from "../../../data/API"

import { ReportType } from "../../../data/types"
import { useUI } from "../../../states"

import { EntitiesItemDetails } from "../../Layouts/EntitiesItemDetails"

import icon from "./role.svg";

type Props = {
  className?: string  
}

export const AdminReportDetails: React.FC<Props> = observer(({ className }) => {
  const { reports, modals } = useUI()
  const { data = {} } = useQuery<ReportType>(["reports", reports.id], API.getReport(reports.id)) 
  
  const edit = () => {
    modals.show('edit report')
  }

  const remove = () => {
    modals.show('delete report')
  }

  const close = () => {
    reports.unselect()
  }

  return (
    <EntitiesItemDetails 
      className={className} 
      data={data}
      onEdit={edit}
      onDelete={remove}
      onClose={close}
    >
      <p title={data.link}>{data.link}</p>
      <h4>User roles</h4>
      <ul>
      { data.relations && data.relations.map(role => /* remove uneccessary checkings after typization */
        <li key={role.id}><img src={icon} />{ role.name }</li>
      ) }
      </ul>
    </EntitiesItemDetails>
  )  
})