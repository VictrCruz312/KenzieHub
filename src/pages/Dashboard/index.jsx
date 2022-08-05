import React, { useEffect } from "react";
import Header from "../../components/Header";
import axios from "axios";

import { ContainerDashboard } from "./style";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ setLoading, loading, userInfo, setUserInfo, notify }) => {
  const id = localStorage.getItem("@USERID");
  let navigate = useNavigate();

  const getUser = () => {
    setLoading(true);
    axios
      .get(`https://kenziehub.herokuapp.com/users/${id}`)
      .then((res) => setUserInfo(res.data))
      .finally(() => setLoading(false))
      .catch((error) => {
        notify("error", "você deve logar para acessar essa página");
        navigate("/login");
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Header
        setUserInfo={setUserInfo}
        textButton="Sair"
        redirect="/login"
        notify={notify}
      />
      <ContainerDashboard>
        <div className="Perfil">
          <h1>{userInfo.name}</h1>
          <h3>{userInfo.course_module}</h3>
        </div>
        <div className="coding">
          <h1>Que pena! Estamos em desenvolvimento :(</h1>
          <h3>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </h3>
        </div>
      </ContainerDashboard>
      {loading && <Loading />}
    </>
  );
};

export default Dashboard;
