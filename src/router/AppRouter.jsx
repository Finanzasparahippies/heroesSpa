import { Route, Routes } from "react-router-dom"

import { PrivateRouter } from "./PrivateRouter"
import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {

  return (
    <>

      <Routes>

        <Route path="login" element={
          <PublicRoute>
            <LoginPage/>
          </PublicRoute>
        }/>
        {/* <Route path="login" element ={ <LoginPage/> }/> */}

        <Route path="/*" element={
          <PrivateRouter>
            <HeroesRoutes/>
          </PrivateRouter>
        }/>

        {/* <Route path="/*" element ={ <HeroesRoutes/> }/> */}

      </Routes>
    </>
  )
}
