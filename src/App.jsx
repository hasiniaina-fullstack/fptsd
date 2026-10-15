import { Routes, Route, useLocation } from "react-router-dom"

import NavbarFPTSD from './components/NavbarFPTSD'
import Footer from './components/Footer'

import Home from './pages/Home'
import Formation from './pages/Formation'
import Admission from './pages/Admission'
import Contact from './pages/Contact'
import Actualites from "./pages/Actualites"

import Article from "./pages/Article"

import ToutesActualites from "./pages/ToutesActualites"

/************************************************************************/
import Login from "./pages/admin/Login"
import Dashboard from "./pages/admin/Dashboard"
import ActualitesList from "./pages/admin/ActualitesList"
import CreateActualite from "./pages/admin/CreateActualite"
import EditActualite from "./pages/admin/EditActualite"

import ProtectedRoute from "./components/admin/ProtectedRoute"
/************************************************************************/

function App() {

  const location = useLocation()

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname.startsWith("/admin")
  return (
    <>
      {!hideLayout && <NavbarFPTSD />}

      <Routes>

      <Route path="/" element={<Home />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/admin"
          element={
              <ProtectedRoute>
                  <Dashboard />
              </ProtectedRoute>
          }
        />

        <Route
          path="/admin/actualites"
          element={
              <ProtectedRoute>
                  <ActualitesList />
              </ProtectedRoute>
          }
        />

        <Route
          path="/admin/actualites/create"
          element={
              <ProtectedRoute>
                  <CreateActualite />
              </ProtectedRoute>
          }
        />

        <Route
          path="/admin/actualites/edit/:id"
          element={
              <ProtectedRoute>
                  <EditActualite />
              </ProtectedRoute>
          }
        />

        <Route path="/actualites/:id" element={<Article />} />

        <Route
            path="/actualites"
            element={<ToutesActualites />}
        />
  
      </Routes>

      {!hideLayout && <Footer />}
      
    </>
  )
}

export default App
