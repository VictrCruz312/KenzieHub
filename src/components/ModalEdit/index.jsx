import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { Modals } from "../../styles/Modals/style";
import { AiOutlineClose } from "react-icons/ai";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const ModalEdit = () => {
  const { userInfo, techEdit, setTechEdit, navigate, updateTech, deleteTech } =
    useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    userInfo && setTechEdit(userInfo.techs.filter((tech) => tech.id === id));
  }, [userInfo, id, setTechEdit]);

  const ExitModal = () => {
    setTechEdit("");
    navigate("/");
  };

  const formSchema = yup.object().shape({
    status: yup.string().required("Status é obrigatório"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    updateTech(id, data);
  };

  return (
    techEdit !== "" && (
      <Modals>
        <div className="containerModal">
          <div className="navigationModal">
            <h1>Tecnologia Detalhes</h1>
            <button onClick={() => ExitModal()}>
              <AiOutlineClose />
            </button>
          </div>
          <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
            <div className="containerInput">
              <div className="ContainerNameAndError">
                <label htmlFor="name">Nome do projeto</label>
              </div>
              <input disabled defaultValue={techEdit[0].title} />
            </div>
            <div className="containerInput">
              <div className="ContainerNameAndError">
                <label htmlFor="status">Status</label>
              </div>
              <select name="status" id="status" {...register("status")}>
                <option value="iniciante">iniciante</option>
                <option value="intermediario">intermediario</option>
                <option value="avançado">avançado</option>
              </select>
            </div>
            <div className="containerButton">
              <button type="submit">Salvar alterações</button>
              <button
                type="button"
                className="btnDelete"
                onClick={() => deleteTech(id)}
              >
                Excluir
              </button>
            </div>
          </form>
        </div>
      </Modals>
    )
  );
};

export default ModalEdit;
