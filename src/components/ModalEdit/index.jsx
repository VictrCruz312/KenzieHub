import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const ModalEdit = () => {
  const { userInfo, techEdit, setTechEdit, navigate, updateTech, deleteTech } =
    useContext(UserContext);
  const [status, setStatus] = useState("iniciante");
  const { id } = useParams();

  useEffect(() => {
    userInfo && setTechEdit(userInfo.techs.filter((tech) => tech.id === id));
  }, [userInfo, id, setTechEdit]);

  const ExitModal = () => {
    setTechEdit("");
    navigate("/");
  };
  return (
    techEdit !== "" && (
      <div>
        <div>
          <h1>Tecnologia Detalhes</h1>
          <button onClick={() => ExitModal()}>fechar</button>
        </div>
        <div>
          <label htmlFor="name"></label>
          <input
            style={{ color: "white" }}
            disabled
            type="text"
            id="name"
            defaultValue={techEdit[0].title}
          />
        </div>
        <div>
          <label htmlFor="status"></label>
          <select
            name="status"
            id="status"
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="iniciante">iniciante</option>
            <option value="intermediario">intermediario</option>
            <option value="avançado">avançado</option>
          </select>
          <button onClick={() => updateTech(id, { status: status })}>
            Salvar alterações
          </button>
          <button onClick={() => deleteTech(id)}>Excluir</button>
        </div>
      </div>
    )
  );
};

export default ModalEdit;
