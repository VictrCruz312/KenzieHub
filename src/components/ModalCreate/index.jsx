import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Modals } from "../../styles/Modals/style";
import { AiOutlineClose } from "react-icons/ai";

const ModalCreate = () => {
  const { setTechEdit, navigate, createTech } = useContext(UserContext);
  const [status, setStatus] = useState("iniciante");
  const [name, setName] = useState("");

  const ExitModal = () => {
    setTechEdit("");
    navigate("/");
  };

  return (
    <Modals>
      <div className="containerModal">
        <div className="navigationModal">
          <h1>Cadastrar tecnologia</h1>
          <button onClick={() => ExitModal()}>
            <AiOutlineClose />
          </button>
        </div>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            style={{ color: "white" }}
            type="text"
            id="name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="status">Selecionar status</label>
          <select
            name="status"
            id="status"
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="iniciante">iniciante</option>
            <option value="intermediario">intermediario</option>
            <option value="avançado">avançado</option>
          </select>
        </div>
        <div className="containerButton">
          <button onClick={() => createTech({ title: name, status: status })}>
            Salvar alterações
          </button>
        </div>
      </div>
    </Modals>
  );
};

export default ModalCreate;
