import { Routes, Route, Navigate, redirect } from "react-router-dom"
import { Usuarios } from "../modules/usuarios/pages/Usuarios"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/usuarios" element={ <Usuarios></Usuarios> }>
        </Route>
        <Route path="/*" element={ <Navigate to="/usuarios">  </Navigate> } >
        </Route>
    </Routes>
  )
}
