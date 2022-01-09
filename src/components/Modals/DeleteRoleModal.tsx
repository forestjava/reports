import { observer } from "mobx-react-lite";
import { useUI } from "../../states"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { ReportType } from "../../data/types"
import { API } from "../../data/API"

import styles from "./this.module.css"
import classNames from "classnames"

import { Column, Row } from "../Layouts/Flex";
import { Button } from "../Atoms/Button";

export const DeleteRoleModal = observer(() => {
  const { roles, modals } = useUI()
  const id = roles.id;

  const queryClient = useQueryClient()
  const mutation = useMutation(API.delRole()) 

  const remove = async () => {
    roles.unselect()
    modals.close()
    await mutation.mutateAsync(id)
    await queryClient.invalidateQueries('roles');
  } 
  /* TODO add checking of mutation statuses (loading, error) */

  return  ( 
    <Column tag="form" className={classNames([styles.modal, styles.confirm])}>

      <Row className={styles.confirmText}>
        Selected user role will be deleted from the System. Would you like to proceed?
      </Row>

      <Row justify="between">
        <Button variant="secondary" onClick={() => modals.close()}>Cancel</Button>      
        <Button variant="primary" onClick={remove}>Yes, delete</Button>      
      </Row>
    </Column>
  )
})
