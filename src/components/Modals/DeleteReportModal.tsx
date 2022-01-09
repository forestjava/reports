import { observer } from "mobx-react-lite";
import { useUI } from "../../states"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { ReportType } from "../../data/types"
import { API } from "../../data/API"

import styles from "./this.module.css"
import classNames from "classnames"

import { Column, Row } from "../Layouts/Flex";
import { Button } from "../Atoms/Button";

export const DeleteReportModal = observer(() => {
  const { reports, modals } = useUI()
  const id = reports.id;

  const queryClient = useQueryClient()
  const mutation = useMutation(API.delReport()) 

  const remove = async () => {
    reports.unselect()
    modals.close()
    await mutation.mutateAsync(id)
    await queryClient.invalidateQueries('reports');
  } 

  return  ( 
    <Column tag="form" className={classNames([styles.modal, styles.confirm])}>

      <Row className={styles.confirmText}>
        Selected report will be deleted from the System. Would you like to proceed?
      </Row>

      <Row justify="between">
        <Button variant="secondary" onClick={() => modals.close()}>Cancel</Button>      
        <Button variant="primary" onClick={remove}>Yes, delete</Button>      
      </Row>
    </Column>
  )
})
