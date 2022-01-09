import { Button } from "../Atoms/Button";
import { Row } from "../Layouts/Flex";
import { Panel } from "../Layouts/Panel";
import { Pagination } from "../Molecules/Pagination";
import { SearchInput } from "../Molecules/SearchInput";

import panel from "../Layouts/Panel/styles.module.css";

import { AdminRolesList } from "../Molecules/AdminRolesList";
import { AdminRoleDetails } from "../Molecules/AdminRoleDetails";
import { useUI } from "../../states";
import { observer } from "mobx-react-lite";

export const RolesManagement = observer(() => {
  const { modals, roles } = useUI()

  return (
    <Panel>
      <Row className={panel.heading} align="center">
        <h2>User roles management </h2>
      </Row>
      <Row className={panel.tools}>
        <SearchInput placeholder="Search user role" handler={roles} />
        <Button variant="primary" onClick={() => modals.show('add role')}>Add new role</Button>
      </Row>
      <Row className={panel.tables}>
        <AdminRolesList className={panel.half} />
        { roles.selected && <AdminRoleDetails className={panel.half} /> }
      </Row>
      <Row className={panel.pagination}>
        <Pagination source={roles} />
      </Row>  
    </Panel> 
  )
})
