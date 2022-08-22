import {
  IFormEditProfile,
  useUserContext,
} from "../../contexts/UserContext/UserContext";
import { Modals } from "../../styles/Modals/style";
import { AiOutlineClose } from "react-icons/ai";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const ModalProfile = () => {
  const { navigate, editProfile } = useUserContext();
  const { userInfo } = useUserContext();

  const ExitModal = () => {
    navigate("/");
  };

  const formSchema = yup.object().shape({
    name: yup.string(),
    contact: yup.string(),
    old_password: yup.string().required("Digite sua senha"),
    password: yup
      .string()
      .required("Para não alterar a senha digite a atual")
      .matches(/(?=.*\d)/, "Deve conter 1 numero")
      .matches(/(?=.*[a-z])/, "Deve conter 1 letra minúscula")
      .matches(/(?=.*[A-Z])/, "Deve conter 1 letra maiúscula")
      .matches(/(?=.*[$*&@#.,/+-])/, "Deve conter 1 caractere especial")
      .matches(/([a-zA-Z0-9$*&@#.,/+-]{6,})/, "minimo 8 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormEditProfile>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: IFormEditProfile) => {
    editProfile(data);
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
            <h1>Editar perfil</h1>
            <button onClick={() => ExitModal()}>
              <AiOutlineClose />
            </button>
          </div>
          <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
            <div className="containerInput">
              <div className="ContainerNameAndError">
                <label htmlFor="name">Nome</label>
                <span>{errors.name?.message}*</span>
              </div>
              <input
                id="name"
                defaultValue={userInfo?.name}
                {...register("name")}
              />
            </div>
            <div className="containerInput">
              <div className="ContainerNameAndError">
                <label htmlFor="contact">Contato</label>
                <span>{errors.contact?.message}*</span>
              </div>
              <input
                id="contact"
                defaultValue={userInfo?.contact}
                {...register("contact")}
              />
            </div>
            <div className="containerInput">
              <div className="ContainerNameAndError">
                <label htmlFor="old_password">Senha antiga</label>
                <span>{errors.old_password?.message}*</span>
              </div>
              <input
                id="old_password"
                placeholder="Senha antiga"
                {...register("old_password")}
              />
            </div>
            <div className="containerInput">
              <div className="ContainerNameAndError">
                <label htmlFor="contact">Nova senha</label>
                <span>Para não alterar repita a senha atual</span>
              </div>
              <input placeholder="Crie uma senha" {...register("password")} />
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

export default ModalProfile;
