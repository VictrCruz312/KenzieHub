import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ContainerRegister } from "./style";
import { Form } from "../../styles/Form/style";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { motion } from "framer-motion";
import {
  IDataRegister,
  useUserContext,
} from "../../contexts/UserContext/UserContext";

const Register = () => {
  const { loading, registerUser } = useUserContext();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .email("formato de Email incorreto")
      .required("Email é obrigatório"),
    password: yup
      .string()
      .required("Senha é obrigatório")
      .matches(/(?=.*\d)/, "Deve conter 1 numero")
      .matches(/(?=.*[a-z])/, "Deve conter 1 letra minúscula")
      .matches(/(?=.*[A-Z])/, "Deve conter 1 letra maiúscula")
      .matches(/(?=.*[$*&@#.,/+-])/, "Deve conter 1 caractere especial")
      .matches(/([a-zA-Z0-9$*&@#.,/+-]{6,})/, "minimo 8 caracteres"),
    confirmPassword: yup
      .string()
      .required("Repita a senha")
      .oneOf([yup.ref("password"), null], "As senhas não conferem"),
    bio: yup.string().required("Bio é obrigatório"),
    contact: yup.string().required("Contato é obrigatório"),
    course_module: yup.string().required("Modulo é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataRegister>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: IDataRegister) => registerUser(data);

  return (
    <>
      <Header textButton={"Voltar"} redirect="/login" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <ContainerRegister>
          <div className="containerRegisterTexts">
            <h1>Crie sua conta</h1>
            <p>Rapido e grátis, vamos nessa</p>
          </div>
          <Form errors={errors} onSubmit={handleSubmit(onSubmitFunction)}>
            <div className="containerInput">
              <div className="ContainerNameAndError">
                <label htmlFor="name">Nome</label>
                <span>{errors.name?.message}*</span>
              </div>
              <input
                type="text"
                placeholder="Digite aqui seu nome"
                id="name"
                {...register("name")}
              />
            </div>

            <div className="containerInput">
              <div className="ContainerNameAndError">
                <label htmlFor="email">Email</label>
                <span>{errors.email?.message}*</span>
              </div>
              <input
                type="text"
                placeholder="Digite aqui seu email"
                id="email"
                {...register("email")}
              />
            </div>

            <div className="containerInput">
              <div className="ContainerNameAndError">
                <label htmlFor="password">Senha</label>
                <span>{errors.password?.message}*</span>
              </div>
              <input
                type="password"
                placeholder="Digite aqui sua senha"
                id="password"
                {...register("password")}
              />
            </div>

            <div className="containerInput">
              <div className="ContainerNameAndError">
                <label htmlFor="confirmPassword">Confirmar senha</label>
                <span>{errors.confirmPassword?.message}*</span>
              </div>
              <input
                type="password"
                placeholder="Digite novamente sua senha"
                id="confirmPassword"
                {...register("confirmPassword")}
              />
            </div>

            <div className="containerInput">
              <div className="ContainerNameAndError">
                <label htmlFor="bio">Bio</label>
                <span>{errors.bio?.message}*</span>
              </div>
              <input
                type="text"
                placeholder="Fale sobre você"
                id="bio"
                {...register("bio")}
              />
            </div>

            <div className="containerInput">
              <div className="ContainerNameAndError">
                <label htmlFor="contact">Contato</label>
                <span>{errors.contact?.message}*</span>
              </div>
              <input
                type="text"
                placeholder="linkedin/in/seuUsuario"
                id="contact"
                {...register("contact")}
              />
            </div>

            <div className="containerInput">
              <div className="ContainerNameAndError">
                <label htmlFor="course_module">Selecionar módulo</label>
                <span>{errors.course_module?.message}</span>
              </div>
              <select id="course_module" {...register("course_module")}>
                <option value="1º módulo (Introdução ao Frontend)">
                  1º módulo - Introdução ao Frontend
                </option>
                <option value="2 módulo (Frontend intermediario)">
                  2º módulo - Frontend intermediario
                </option>
                <option value="3º módulo (Frontend Avançado)">
                  3º módulo - Frontend Avançado
                </option>
                <option value="4º módulo (Introdução ao Backend">
                  4º módulo - Introdução ao Backend
                </option>
                <option value="5º módulo (Backend Avançado)">
                  5º módulo - Backend Avançado
                </option>
                <option value="6º módulo (carreiras)">
                  6º módulo - carreiras
                </option>
              </select>
            </div>

            <button
              disabled={Object.keys(errors).length === 0 ? false : true}
              type="submit"
            >
              Cadastrar
            </button>
          </Form>
        </ContainerRegister>
      </motion.div>
      {loading && <Loading />}
    </>
  );
};

export default Register;
