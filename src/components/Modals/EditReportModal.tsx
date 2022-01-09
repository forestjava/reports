import { observer } from "mobx-react-lite"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { API } from "../../data/API"
import { ReportType } from "../../data/types"
import { useUI } from "../../states"
import { Button } from "../Atoms/Button"
import { Input } from "../Atoms/Input"
import { Row, Column } from "../Layouts/Flex"

import styles from "./this.module.css"
import classNames from "classnames"

export const EditReportModal = observer(() => {
  const { reports, modals } = useUI()
  const { data = {} } = useQuery<ReportType>(["reports", reports.id], API.getReport(reports.id))
  
  const queryClient = useQueryClient()
  const mutation = useMutation(API.saveReport()) 

  const save = async () => {
    modals.close()
    await mutation.mutateAsync(data)
    await queryClient.invalidateQueries('reports');
  } 
  
  return ( 
    <Column tag="form" className={classNames([styles.modal, styles.fieldset])}>
      <h3>Edit report</h3>

      <Column className={styles.field}>
        <label>Name</label>
        <Input placeholder="Report name" defaultValue={data.name} onChange={value => data.name = value} /> {/* TODO ...register('name') */}
      </Column>

      <Column className={styles.field}>
        <label>Link</label>
        <Input placeholder="Link to OBIEE" defaultValue={data.link} onChange={value => data.link = value} /> {/* TODO ...register('link') */}
      </Column>

      <Row justify="between">
        <Button variant="secondary" onClick={() => modals.close()}>Cancel</Button>      
        <Button variant="primary" onClick={save}>Save</Button>      
      </Row>
    </Column>
  )
})
