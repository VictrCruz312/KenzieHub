import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesMain = ({ setUserInfo, userInfo, setLoading, loading, notify }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Dashboard
            setUserInfo={setUserInfo}
            userInfo={userInfo}
            setLoading={setLoading}
            loading={loading}
            notify={notify}
          />
        }
      />
      <Route
        path="/login"
        element={
          <Login setLoading={setLoading} loading={loading} notify={notify} />
        }
      />
      <Route
        path="/register"
        element={
          <Register setLoading={setLoading} loading={loading} notify={notify} />
        }
      />
    </Routes>
  );
};

export default RoutesMain;
