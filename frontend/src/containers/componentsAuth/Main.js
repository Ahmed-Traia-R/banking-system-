import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Route, Routes } from 'react-router-dom';

import NormalUser from "./NormalUser";
import Mod from "./Mod";
import Admin from "./Admin";

export default function Main() {
  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3000/login").then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].role);
      }
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<NormalUser />} />
      {role === "mod" && <Route path="/mod" element={<Mod />} />}
      {role === "admin" && <Route path="/admin" element={<Admin />} />}
    </Routes>
  );
}