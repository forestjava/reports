import React from "react"

import { observer } from "mobx-react-lite"
import { RoleType } from "../../data/types"
import { useUI } from "../../states"
import { Button } from "../Atoms/Button"
import { Input } from "../Atoms/Input"
import { Row, Column } from "../Layouts/Flex"

import styles from "./this.module.css"
import classNames from "classnames"

import { useMutation, useQueryClient } from "react-query"
import { API } from "../../data/API"

export const AddRoleModal = observer(() => {

  const { modals } = useUI()
  const [data] = React.useState<RoleType>({ name: '' })

  const queryClient = useQueryClient()
  const mutation = useMutation(API.addRole()) 

  const save = async () => {
    modals.close()
    await mutation.mutateAsync(data!)
    await queryClient.invalidateQueries('roles');
  } 
 
  return (
    <Column tag="form" className={classNames([styles.modal, styles.fieldset])}> {/* TODO use form and 'Save' submit button PPBAE-193 */}
      <h3>Add new role</h3>

      <Column className={styles.field}>
        <label>Name</label>
        <Input placeholder="User role name" defaultValue={data.name} onChange={value => data.name = value} /> {/* TODO ...register('name') PPBAE-193 */}
      </Column>

      <Column className={styles.field}>
        <label>Reports</label>
        <input />
      </Column>

      <Row justify="between">
        <Button variant="secondary" onClick={() => modals.close()}>Cancel</Button>      
        <Button variant="primary" onClick={save}>Save</Button>      
      </Row>
    </Column>
  )
})
