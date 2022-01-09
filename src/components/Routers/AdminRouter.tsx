import { Routes, Route } from 'react-router-dom';
import { ReportsManagement } from '../Organisms/ReportsManagement';
import { ReportsPanel } from '../Organisms/ReportsPanel';
import { RolesManagement } from '../Organisms/RolesManagement';

export const AdminRouter = () => (
  <Routes>
    <Route path="roles" element={<RolesManagement />} />
    <Route path="reports" element={<ReportsManagement />} />
    <Route path="panel" element={<ReportsPanel />} />
  </Routes>
)
