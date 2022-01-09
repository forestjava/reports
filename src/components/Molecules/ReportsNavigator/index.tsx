import { Row } from "../../Layouts/Flex";
import { Pagination } from "../../Molecules/Pagination";
import { SearchInput } from "../../Molecules/SearchInput";

import panel from "../../Layouts/Panel/styles.module.css";

import { ReportsList } from "../../Molecules/ReportsList";
import { useUI } from "../../../states";
import { Button } from "../../Atoms/Button";

import rollup from "./arrow.svg"
import classNames from "classnames";

export const ReportsNavigator = () => {
  const { app, user } = useUI()
  const isAdmin = app.mode == 'admin'
  return (
    <>
      <Row className={classNames([panel.heading, !isAdmin && panel.empty, user.iframes && panel.moved])} justify="between">
        { isAdmin ? <h2>Report panel</h2> : <h2 />} {/* empty header element should exist */}
        { user.iframes && <Button variant="ghost" onClick={() => user.arrange(true)}><img src={rollup} /></Button>}
      </Row>
      <Row className={panel.tools}>
        <SearchInput placeholder="Search report" handler={user} />
      </Row>
      <Row className={panel.tables}>
        <ReportsList className={panel.full} />
      </Row>
      <Row className={panel.pagination}>
        <Pagination source={user} />
      </Row>  
    </>  
  )
}
