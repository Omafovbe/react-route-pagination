import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import NigState from "./pages/countryInfo/nigState"
import NigStates from "./pages/countryInfo/nigStates"
import NotFound from "./pages/notFound"
import Users from "./pages/users"
import Index from "./pages/countryInfo"

const AppRoutes = () => {
  return (
    <div className="App-body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="states" element={<NigStates />}>
          <Route
            index
            element={
               <Index />
            }
          />
          <Route path=":stateId" element={<NigState />} />
        </Route>
        <Route path="users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
