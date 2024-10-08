import Login from "./components/login";
import Start from "./components/Start_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function app() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}>
          {" "}
        </Route>
        <Route path="/adminlogin" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default app;
