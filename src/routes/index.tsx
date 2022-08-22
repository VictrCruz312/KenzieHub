import { Route, Routes, Navigate } from "react-router-dom";
import ModalCreate from "../components/ModalCreate";
import ModalEdit from "../components/ModalEdit";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { AnimatePresence } from "framer-motion";
import TechProvider from "../contexts/TechsContext/TechsContext";
import ModalProfile from "../components/ModalProfile";
import ModalAvatar from "../components/ModalAvatar";

const RoutesMain = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route
          path="/"
          element={
            <TechProvider>
              <Dashboard />
            </TechProvider>
          }
        >
          <Route path=":id" element={<ModalEdit />} />
          <Route path="/create" element={<ModalCreate />} />
          <Route path="/profile" element={<ModalProfile />} />
          <Route path="/avatar" element={<ModalAvatar />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesMain;
