import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import { Outlet, Link } from "react-router-dom";

import { ContainerDashboard, ContainerTecnologias, ListTechs } from "./style";
import Loading from "../../components/Loading";
import { UserContext } from "../../contexts/UserContext";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { loading, userInfo, getUser, navigate } = useContext(UserContext);
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Header textButton="Sair" redirect="/login" />
      <motion.div
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <ContainerDashboard>
          <div className="Perfil">
            <h1 className="perfil__name">{userInfo.name}</h1>
            <h3 className="perfil__module">{userInfo.course_module}</h3>
          </div>
          <ContainerTecnologias>
            <div className="containerCreate">
              <h1 className="titleContainer">Tecnologias</h1>
              <button className="btnCreate" onClick={() => navigate("create")}>
                <FaPlus />
              </button>
            </div>
            <ListTechs className="listTecnologias">
              {userInfo &&
                userInfo.techs.map((tech) => (
                  <Link key={tech.id} id={tech.id} to={tech.id}>
                    <li className="tecnologia">
                      <p>{tech.title}</p>
                      <span>{tech.status}</span>
                    </li>
                  </Link>
                ))}
            </ListTechs>
          </ContainerTecnologias>
        </ContainerDashboard>
      </motion.div>
      {loading && <Loading />}
      <Outlet />
    </>
  );
};

export default Dashboard;
