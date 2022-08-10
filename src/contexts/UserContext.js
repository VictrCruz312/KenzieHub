import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [techEdit, setTechEdit] = useState("");
  const navigate = useNavigate();

  const notify = (type, message) => {
    type === "error" && toast.error(message);
    type === "success" && toast.success(message);
    type === "warning" && toast.warn(message);
  };

  const loggout = () => {
    localStorage.clear();
    notify("success", "deslogado");
    setUserInfo("");
  };

  const getUser = () => {
    const id = localStorage.getItem("@USERID");
    setLoading(true);
    api
      .get(`/users/${id}`)
      .then((res) => setUserInfo(res.data))
      .finally(() => setLoading(false))
      .catch(() => {
        notify("error", "você deve logar para acessar essa página");
        localStorage.clear();
        navigate("/login");
      });
  };

  const updateTech = (id, data) => {
    setLoading(true);
    api
      .put(`/users/techs/${id}`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("@TOKEN")}` },
      })
      .then(() => {
        getUser();
        notify("success", "editado com sucesso");
      })
      .finally(() => setLoading(false))
      .catch(() => notify("error", "não foi possível editar"));
  };

  const deleteTech = (id) => {
    setLoading(true);
    api
      .delete(`/users/techs/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("@TOKEN")}` },
      })
      .then(() => {
        getUser();
        navigate("/");
        notify("success", "Usuário deletado com sucesso");
      })
      .finally(() => setLoading(true))
      .catch(() => notify("error", "erro ao excluir"));
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        userInfo,
        setUserInfo,
        notify,
        loggout,
        visibility,
        setVisibility,
        navigate,
        getUser,
        techEdit,
        setTechEdit,
        updateTech,
        deleteTech,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
