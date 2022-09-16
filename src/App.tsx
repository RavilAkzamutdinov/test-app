import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ContactsPage from './pages/ContactsPage'
import LoginPage from './pages/LoginPage'
import { RequireAuth } from './components/RequireAuth/RequireAuth'
import { Routes as AppRoutes } from './routes/routes'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route
          path={AppRoutes.CONTACTS}
          element={
            <RequireAuth>
              <ContactsPage />
            </RequireAuth>
          }
        />
        <Route path='*' element={<Navigate to={AppRoutes.LOGIN} replace />} />
      </Routes>
    </div>
  )
}

export default App