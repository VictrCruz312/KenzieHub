import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext/UserContext";
import { Modals } from "../../styles/Modals/style";
import { AiOutlineClose } from "react-icons/ai";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  IDataUpdateTech,
  useTechContext,
} from "../../contexts/TechsContext/TechsContext";

const ModalEdit = () => {
  const { navigate, userInfo } = useUserContext();
  const { techEdit, setTechEdit, updateTech, deleteTech } = useTechContext();

  const { id } = useParams();

  useEffect(() => {
    userInfo && setTechEdit(userInfo.techs.filter((tech) => tech.id === id)[0]);
  }, [userInfo, id, setTechEdit]);

  const ExitModal = () => {
    setTechEdit(undefined);
    navigate("/");
  };

  const formSchema = yup.object().shape({
    status: yup.string().required("Status é obrigatório"),
  });

  const { register, handleSubmit } = useForm<IDataUpdateTech>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: IDataUpdateTech) => {
    updateTech(`${id}`, data);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
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
              <input
                className="disabled"
                disabled
                defaultValue={techEdit?.title}
              />
            </div>
            <div className="containerInput">
              <div className="ContainerNameAndError">
                <label htmlFor="status">Status</label>
              </div>
              <select id="status" {...register("status")}>
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
                onClick={() => deleteTech(`${id}`)}
              >
                Excluir
              </button>
            </div>
          </form>
        </div>
      </Modals>
    </motion.div>
  );
};

export default ModalEdit;
