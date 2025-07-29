import {Routes, Route, BrowserRouter} from "react-router-dom"
import {Signup} from "./pages/Signup"
import {Signin} from "./pages/Signin"
import {Dashboard} from "./pages/Dashboard"
import {SendMoney} from "./pages/SendMoney"
import { ErrorBoundary } from "react-error-boundary"



function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/sendmoney" element={<ErrorBoundary fallback={"something bad"}><SendMoney/></ErrorBoundary>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
