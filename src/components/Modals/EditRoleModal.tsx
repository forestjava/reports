import { observer } from "mobx-react-lite"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { API } from "../../data/API"
import { RoleType } from "../../data/types"
import { useUI } from "../../states"
import { Button } from "../Atoms/Button"
import { Input } from "../Atoms/Input"
import { Row, Column } from "../Layouts/Flex"

import styles from "./this.module.css"
import classNames from "classnames"

export const EditRoleModal = observer(() => {
  const { roles, modals } = useUI()
  const { data = {} } = useQuery<RoleType>(["roles", roles.id], API.getRole(roles.id))
  
  const queryClient = useQueryClient()
  const mutation = useMutation(API.saveRole()) 

  const save = async () => {
    modals.close()
    await mutation.mutateAsync(data)
    await queryClient.invalidateQueries('roles');
  } 
  
  return ( 
    <Column tag="form" className={classNames([styles.modal, styles.fieldset])}>
      <h3>Edit role</h3>

      <Column className={styles.field}>
        <label>Name</label>
        <Input placeholder="User role name" defaultValue={data.name} onChange={value => data.name = value} /> {/* TODO ...register('name') */}
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
