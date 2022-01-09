import { useUI } from "../../states";

import { ReportsViewerTabs } from "../Molecules/ReportsViewerTabs";
import { ReportIFrame } from "../Molecules/ReportIFrame";

export const ReportsViewer = () => {
  const { user } = useUI()
  return (
    <>
      <ReportsViewerTabs />
      <ReportIFrame />
    </>
  )
}