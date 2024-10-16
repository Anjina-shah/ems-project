import Start from "./components/start";
import Employeelogin from "./components/employee-login";
import home from "./components/home";
import AdminLogin from "./components/admin-login";
import Dashboard from "./components/dashboard";
// import profile from "./components/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/admin-login" element={<AdminLogin />}></Route>
        <Route path="/employee-login" element={<Employeelogin />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        {/* <Route path="/employee_login" element={<EmployeeLogin />}></Route>
        <Route path="/employee_detail/:id" element={<EmployeeDetail />}></Route> */}
        {/* <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
