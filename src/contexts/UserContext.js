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

  const login = (data) => {
    setLoading(true);
    api
      .post("/sessions", data)
      .then((res) => {
        notify("success", "logado com sucesso");
        localStorage.setItem("@TOKEN", res.data.token);
        localStorage.setItem("@USERID", res.data.id);
        navigate("/");
        return res;
      })
      .finally(() => setLoading(false))
      .catch((error) => notify("error", "Usuário ou senha incorretos"));
  };

  const loggout = () => {
    localStorage.clear();
    notify("success", "deslogado");
    setUserInfo("");
  };

  const getUser = () => {
    setLoading(true);
    api
      .get("profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("@TOKEN")}` },
      })
      .then((res) => setUserInfo(res.data))
      .finally(() => setLoading(false))
      .catch((res) => {
        notify("error", "você deve logar para acessar essa página");
        localStorage.clear();
        navigate("/login");
        console.log(res);
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
        navigate("/");
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
        notify("success", "Tecnologia deletada com sucesso");
      })
      .finally(() => setLoading(true))
      .catch(() => notify("error", "erro ao excluir"));
  };

  const createTech = (data) => {
    setLoading(true);
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      })
      .then(() => {
        getUser();
        navigate("/");
        notify("success", "Tecnologia criada com sucesso");
      })
      .finally(() => setLoading(false))
      .catch(() =>
        notify("error", "já existe uma tecnologia com o mesmo nome")
      );
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
        createTech,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
