import { EntitiesList } from "../../Layouts/EntitiesList"

import { observer } from "mobx-react-lite"
import { useQuery } from "react-query"
import { API } from "../../../data/API"

import { useUI } from "../../../states"

type Props = {
  className?: string  
}

export const AdminRolesList: React.FC<Props> = observer(({ className }) => {
  // get page's UI state
  const { roles } = useUI()
  // fetch data for pagination
  useQuery(["roles", "$count", roles.search], API.countRoles(roles), { onSuccess: (count) => roles.setSize(count) }); // TODO is there a more elegant solution? 
  // fetch list data for this component
  const { data = [] } = useQuery(["roles", "$list", roles.search, roles.currentPage], API.getRoles(roles))  
  // TODO wrap to unique function with different params to re-use PPBAE-194

  return (
    <EntitiesList 
      className={className} 
      data={data}
      isSelected={(id: string) => roles.selected && roles.id == id} 
      onSelect={(id: string) => roles.select(id)}
    />
  )
})
