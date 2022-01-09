import { observer } from "mobx-react-lite"

import { useQuery } from "react-query"
import { API } from "../../../data/API"

import { RoleType } from "../../../data/types"
import { useUI } from "../../../states"

import { EntitiesItemDetails } from "../../Layouts/EntitiesItemDetails"

import icon from "./report.svg";

type Props = {
  className?: string  
}

export const AdminRoleDetails: React.FC<Props> = observer(({ className }) => {
  const { roles, modals } = useUI()
  const { data = {} } = useQuery<RoleType>(["roles", roles.id], API.getRole(roles.id))

  const edit = () => {
    modals.show('edit role')
  }

  const remove = () => {
    modals.show('delete role')
  }

  const close = () => {
    roles.unselect()
  }

  return (
    <EntitiesItemDetails 
      className={className} 
      data={data}
      onEdit={edit}
      onDelete={remove}
      onClose={close}
    >
          <h4>Reports</h4>
          <ul>
          { data.relations && data.relations.map(report =>
            <li key={report.id}><img src={icon} />{ report.name }</li>
          ) }
          </ul>
    </EntitiesItemDetails>
  )  
})