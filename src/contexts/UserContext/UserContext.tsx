import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { IUser } from "../TechsContext/TechsContext";

interface IUserProvider {
  userInfo: IUser | undefined;
  setUserInfo: Dispatch<SetStateAction<IUser | undefined>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  notify: (type: string, message: string) => void;
  getUser: () => void;
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  navigate: NavigateFunction;
  login: (data: IDataLogin) => void;
  registerUser: (data: IDataRegister) => void;
  editProfile: (data: IFormEditProfile) => void;
}

export interface IUserTechProps {
  children: ReactNode;
}

export interface IDataLogin {
  email: string;
  password: string;
}

export interface IDataRegister {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface IFormEditProfile {
  name: string;
  contact: string;
  old_password: string;
  password: string;
}

const UserContext = createContext<IUserProvider>({} as IUserProvider);

const UserProvider = ({ children }: IUserTechProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [visibility, setVisibility] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<IUser | undefined>();
  const navigate: NavigateFunction = useNavigate();

  const notify = (type: string, message: string) => {
    type === "error" && toast.error(message);
    type === "success" && toast.success(message);
    type === "warning" && toast.warn(message);
  };

  const login = (data: IDataLogin) => {
    setLoading(true);
    api
      .post("/sessions", data)
      .then((res) => {
        notify("success", "logado com sucesso");
        localStorage.setItem("@TOKEN", res.data.token);
        localStorage.setItem("@USERID", res.data.user.id);
        navigate("/");
      })
      .finally(() => setLoading(false))
      .catch(() => notify("error", "Usuário ou senha incorretos"));
  };

  const registerUser = (data: IDataRegister) => {
    const newData = {
      email: data.email,
      name: data.name,
      bio: data.bio,
      password: data.password,
      course_module: data.course_module,
      contact: data.contact,
    };
    setLoading(true);
    api
      .post("/users", newData)
      .then(() => {
        notify("success", "usuário criado com sucesso");
        navigate("/login");
      })
      .finally(() => setLoading(false))
      .catch(() => notify("error", "email já existe"));
  };

  const editProfile = (data: IFormEditProfile) => {
    setLoading(true);
    api
      .put("/profile", data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("@TOKEN")}` },
      })
      .then(() => {
        notify("success", "perfil editado com sucesso");
        getUser();
        navigate("/");
      })
      .finally(() => setLoading(false))
      .catch((err) => console.log(err));
  };

  const getUser = () => {
    setLoading(true);
    api
      .get("profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("@TOKEN")}` },
      })
      .then((res) => setUserInfo(res.data))
      .finally(() => setLoading(false))
      .catch(() => {
        notify("error", "você deve logar para acessar essa página");
        localStorage.clear();
        navigate("/login");
      });
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        notify,
        visibility,
        setVisibility,
        navigate,
        login,
        registerUser,
        editProfile,
        getUser,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
