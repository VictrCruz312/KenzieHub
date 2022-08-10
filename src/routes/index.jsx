import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ModalCreate from "../components/ModalCreate";
import ModalEdit from "../components/ModalEdit";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path=":id" element={<ModalEdit />} />
        <Route path="/create" element={<ModalCreate />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
};

export default RoutesMain;
