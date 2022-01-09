import { EntitiesList } from "../../Layouts/EntitiesList"

import { useQuery } from "react-query"
import { API } from "../../../data/API"
import { useUI } from "../../../states"
import { observer } from "mobx-react-lite"

type Props = {
  className?: string  
}

export const ReportsList: React.FC<Props> = observer(({ className }) => {

  const { user } = useUI()

  // fetch data for pagination
  useQuery(["reports", "$count", user.search], API.countReports(user), { onSuccess: (count) => user.setSize(count) }); // TODO is there a more elegant solution? 
  // fetch list data for this component
  const { data = [] } = useQuery(["reports", "$list", user.search, user.currentPage], API.getReports(user))  
  // TODO wrap to unique function with different params to re-use PPBAE-194

  return (
    <EntitiesList 
      className={className} 
      data={data}
      isSelected={id => user.tabs.some(tab => tab.id == id)}
      onSelect={(id, name) => user.open({id, name})}
    />
  )
})