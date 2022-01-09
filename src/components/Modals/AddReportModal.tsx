import React from "react"

import { observer } from "mobx-react-lite"
import { ReportType } from "../../data/types"
import { useUI } from "../../states"
import { Button } from "../Atoms/Button"
import { Input } from "../Atoms/Input"
import { Row, Column } from "../Layouts/Flex"

import styles from "./this.module.css"
import classNames from "classnames"

import { useMutation, useQueryClient } from "react-query"
import { API } from "../../data/API"

export const AddReportModal = observer(() => {

  const { modals } = useUI()
  const [data] = React.useState<ReportType>({ name: '', link: '' })

  const queryClient = useQueryClient()
  const mutation = useMutation(API.addReport()) 

  const save = async () => {
    modals.close()
    await mutation.mutateAsync(data!)
    await queryClient.invalidateQueries('reports');
  } 
 
  return (
    <Column tag="form" className={classNames([styles.modal, styles.fieldset])}>
      <h3>Add new report</h3>

      <Column className={styles.field}>
        <label>Name</label>
        <Input placeholder="Report name" defaultValue={data.name} onChange={value => data.name = value} /> {/* TODO ...register('name') PPBAE-193 */}
      </Column>

      <Column className={styles.field}>
        <label>Link</label>
        <Input placeholder="Link to OBIEE" onChange={value => data.link = value} /> {/* TODO ...register('link') PPBAE-193 */}
      </Column>

      <Column className={styles.field}>
        <label>User role</label>
        <input />
      </Column>

      <Row justify="between">
        <Button variant="secondary" onClick={() => modals.close()}>Cancel</Button>      
        <Button variant="primary" onClick={save}>Add report</Button>      
      </Row>
    </Column>
  )
})
