import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { ParkingPage } from '../Pages/ParkingPage';
import { AdminPage   } from '../Pages/AdminPage';
import { ReportsPage } from '../Pages/ReportsPage';
import { useUI } from '../../states';

const AppRoutes = () => {
  const location = useLocation()
  const { app, user } = useUI()

  React.useEffect(() => {
    if (location.pathname.startsWith('/admin')) app.setMode('admin');
    if (location.pathname.startsWith('/reports')) app.setMode('user');
    if (app.mode == 'admin' && user.iframes) user.closeAll()
  }, [location])

  return (
    <Routes>
      <Route path="/admin/*" element={<AdminPage />} />
      <Route path="/reports/*" element={<ReportsPage />} />
      <Route path="/" element={<ParkingPage />} />
    </Routes>
  )
}

export const AppRouter = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
)
