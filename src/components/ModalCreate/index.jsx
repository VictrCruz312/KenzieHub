import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Modals } from "../../styles/Modals/style";
import { AiOutlineClose } from "react-icons/ai";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const ModalCreate = () => {
  const { setTechEdit, navigate, createTech } = useContext(UserContext);

  const ExitModal = () => {
    setTechEdit("");
    navigate("/");
  };

  const formSchema = yup.object().shape({
    title: yup.string().required("Titulo é obrigatório"),
    status: yup.string().required("Status é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => createTech(data);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <Modals>
        <div className="containerModal">
          <div className="navigationModal">
            <h1>Cadastrar tecnologia</h1>
            <button onClick={() => ExitModal()}>
              <AiOutlineClose />
            </button>
          </div>
          <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
            <div className="containerInput">
              <div className="ContainerNameAndError">
                <label htmlFor="name">Nome</label>
                <span>*{errors.title?.message}</span>
              </div>
              <input
                style={{ color: "white" }}
                type="text"
                id="name"
                placeholder="Insira um nome"
                {...register("title")}
              />
            </div>
            <div className="containerInput">
              <div className="ContainerNameAndError">
                <label htmlFor="status">Selecionar status</label>
              </div>
              <select name="status" id="status" {...register("status")}>
                <option value="iniciante">iniciante</option>
                <option value="intermediario">intermediario</option>
                <option value="avançado">avançado</option>
              </select>
            </div>
            <div className="containerButton">
              <button type="submit">Salvar alterações</button>
            </div>
          </form>
        </div>
      </Modals>
    </motion.div>
  );
};

export default ModalCreate;
