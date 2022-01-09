import { observer } from "mobx-react-lite";

import { Panel } from "../Layouts/Panel";
import { useUI } from "../../states";

import { ReportsNavigator } from "../Molecules/ReportsNavigator";
import { ReportsViewer } from "./ReportsViewer";

export const ReportsPanel = observer(() => {
  const { user } = useUI()

  return user.iframes
    ? <ReportsViewer />
    : <Panel>
        <ReportsNavigator />
      </Panel> 
})
