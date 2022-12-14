import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { api } from "../../services/api";
import { IUserTechProps, useUserContext } from "../UserContext/UserContext";

interface ITechProvider {
  loggout: () => void;
  techEdit: ITech | undefined;
  setTechEdit: Dispatch<SetStateAction<ITech | undefined>>;
  updateTech: (id: string, data: IDataUpdateTech) => void;
  deleteTech: (id: string) => void;
  createTech: (data: IDataCreateTech) => void;
}

interface ITech {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

export interface IUser {
  avatar_url: string;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: ITech[];
  updated_at: string;
  works: [];
}

export interface IDataCreateTech {
  title: string;
  status: string;
}

export type IDataUpdateTech = { status: string };

const TechContext = createContext<ITechProvider>({} as ITechProvider);

const TechProvider = ({ children }: IUserTechProps) => {
  const { notify, setLoading, navigate, getUser, setUserInfo } =
    useUserContext();

  const [techEdit, setTechEdit] = useState<ITech | undefined>(undefined);

  const loggout = () => {
    localStorage.clear();
    notify("success", "deslogado");
    setUserInfo(undefined);
  };

  const updateTech = (id: string, data: IDataUpdateTech) => {
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

  const deleteTech = (id: string) => {
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

  const createTech = (data: IDataCreateTech) => {
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
    <TechContext.Provider
      value={{
        loggout,
        updateTech,
        deleteTech,
        createTech,
        techEdit,
        setTechEdit,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export const useTechContext = () => useContext(TechContext);

export default TechProvider;
