import { Button } from "../Atoms/Button";
import { Row } from "../Layouts/Flex";
import { Panel } from "../Layouts/Panel";
import { Pagination } from "../Molecules/Pagination";
import { SearchInput } from "../Molecules/SearchInput";

import panel from "../Layouts/Panel/styles.module.css";

import { AdminReportsList } from "../Molecules/AdminReportsList";
import { AdminReportDetails } from "../Molecules/AdminReportDetails";
import { useUI } from "../../states";
import { observer } from "mobx-react-lite";

export const ReportsManagement = observer(() => {
  
  const { modals, reports } = useUI()
  
  return (
    <Panel>
      <Row className={panel.heading} align="center" justify="between">
        <h2>Reports management</h2>
      </Row>
      <Row className={panel.tools}>
        <SearchInput placeholder="Search report" handler={reports} />
        <Button variant="secondary">Import reports</Button>
        <Button variant="primary" onClick={() => modals.show('add report')}>Add new report</Button>
      </Row>
      <Row className={panel.tables}>
        <AdminReportsList className={panel.half} />
        { reports.selected && <AdminReportDetails className={panel.half} /> }
      </Row>
      <Row className={panel.pagination}>
        <Pagination source={reports} />
      </Row>  
    </Panel>  
  )
})
