import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_BACKEND_SERVER_URL}/verify`)
  //     .then((result) => {
  //       if (result.data.Status) {
  //         if (result.data.role === "admin") {
  //           navigate("/dashboard");
  //         } else {
  //           navigate("/employee_detail/" + result.data.id);
  //         }
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div>
      <h1>Login As</h1>
      <button
        type="button"
        onClick={() => {
          navigate("/employee-login");
        }}
      >
        Employee
      </button>
      <button
        type="button"
        onClick={() => {
          navigate("/admin-login");
        }}
      >
        Admin
      </button>
    </div>
  );
};
export default Start;
