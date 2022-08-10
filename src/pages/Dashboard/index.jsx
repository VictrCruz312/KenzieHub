import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import { Outlet, Link } from "react-router-dom";

import { ContainerDashboard } from "./style";
import Loading from "../../components/Loading";
import { UserContext } from "../../contexts/UserContext";

const Dashboard = () => {
  const { loading, userInfo, getUser } = useContext(UserContext);

  useEffect(() => {
    getUser();
    console.log(userInfo);
  }, []);

  return (
    <>
      <Header textButton="Sair" redirect="/login" />
      <ContainerDashboard>
        <div className="Perfil">
          <h1 className="perfil__name">{userInfo.name}</h1>
          <h3 className="perfil__module">{userInfo.course_module}</h3>
        </div>
        <div className="tecnologias">
          <h1>Tecnologias</h1>
          <ul>
            {userInfo &&
              userInfo.techs.map((tech) => (
                <Link key={tech.id} id={tech.id} to={tech.id}>
                  <li>
                    <p>{tech.title}</p>
                    <span>{tech.status}</span>
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      </ContainerDashboard>
      {loading && <Loading />}
      <Outlet />
    </>
  );
};

export default Dashboard;
