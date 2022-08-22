import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Outlet, Link } from "react-router-dom";

import { ContainerDashboard, ContainerTecnologias, ListTechs } from "./style";
import Loading from "../../components/Loading";
import { useUserContext } from "../../contexts/UserContext/UserContext";
import { FaPlus } from "react-icons/fa";
import { MdOutlineEditNote } from "react-icons/md";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { loading, navigate, userInfo, getUser } = useUserContext();

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
        {userInfo && (
          <ContainerDashboard>
            <div className="Perfil">
              <div className="PerfilNameAndImg">
                {userInfo && (
                  <img
                    className="perfil__img"
                    src={userInfo.avatar_url}
                    alt=""
                  />
                )}
                <h1 className="perfil__name">{userInfo.name}</h1>
              </div>
              <div className="containerModuleAndBtnEdit">
                <button onClick={() => navigate("/profile")}>
                  <MdOutlineEditNote />
                </button>
                <h3 className="perfil__module">{userInfo.course_module}</h3>
              </div>
            </div>
            <ContainerTecnologias>
              <div className="containerCreate">
                <h1 className="titleContainer">Tecnologias</h1>
                <button
                  className="btnCreate"
                  onClick={() => navigate("create")}
                >
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
        )}
      </motion.div>
      {loading && <Loading />}
      <Outlet />
    </>
  );
};

export default Dashboard;
