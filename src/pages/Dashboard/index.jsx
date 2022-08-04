import React, { useEffect } from "react";
import Header from "../../components/Header";
import axios from "axios";

import { ContainerDashboard } from "./style";
import Loading from "../../components/Loading";

const Dashboard = ({ setLoading, loading, userInfo, setUserInfo }) => {
  const id = localStorage.getItem("@USERID");

  const getUser = () => {
    setLoading(true);
    axios
      .get(`https://kenziehub.herokuapp.com/users/${id}`)
      .then((res) => setUserInfo(res.data))
      .finally(() => setLoading(false))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <Header setUserInfo={setUserInfo} textButton="Sair" redirect="/login" />
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
