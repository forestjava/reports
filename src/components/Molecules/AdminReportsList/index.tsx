import { EntitiesList } from "../../Layouts/EntitiesList"

import { useQuery } from "react-query"
import { API } from "../../../data/API"
import { useUI } from "../../../states"
import { observer } from "mobx-react-lite"

type Props = {
  className?: string  
}

export const AdminReportsList: React.FC<Props> = observer(({ className }) => {
  // get page's UI state
  const { reports } = useUI()
  // fetch data for pagination
  useQuery(["reports", "$count", reports.search], API.countReports(reports), { onSuccess: (count) => reports.setSize(count) }); // TODO is there a more elegant solution? 
  // fetch list data for this component
  const { data = [] } = useQuery(["reports", "$list", reports.search, reports.currentPage], API.getReports(reports))  
  // TODO wrap to unique function with different params to re-use PPBAE-194

  return (
    <EntitiesList 
      className={className} 
      data={data}
      isSelected={(id: string) => reports.selected && reports.id == id} 
      onSelect={(id: string) => reports.select(id)}
    />
  )
})