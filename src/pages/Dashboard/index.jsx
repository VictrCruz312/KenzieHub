import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import { Outlet, Link } from "react-router-dom";

import { ContainerDashboard, ContainerTecnologias, ListTechs } from "./style";
import Loading from "../../components/Loading";
import { UserContext } from "../../contexts/UserContext";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { api } from "../../services/api";

const Dashboard = () => {
  const { loading, userInfo, getUser, navigate } = useContext(UserContext);
  useEffect(() => {
    getUser();
  }, []);

  const [file, setFile] = useState();

  const handleFunction = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("avatar", file);
    console.log(formData);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
      },
    };
    const data = { avatar: formData };
    console.log(data.avatar.formData);
    api
      .patch("users/avatar", formData, config)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log(file);
  }, [file]);

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
            <div className="PerfilNameAndImg">
              {userInfo.avatar_url && (
                <img
                  className="perfil__img"
                  src={userInfo.avatar_url}
                  alt="foto de perfil"
                />
              )}
              <h1 className="perfil__name">{userInfo.name}</h1>
            </div>
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
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="file" onChange={(e) => handleFunction(e)} />
          <button type="submit">send</button>
        </form>
      </motion.div>
      {loading && <Loading />}
      <Outlet />
    </>
  );
};

export default Dashboard;
