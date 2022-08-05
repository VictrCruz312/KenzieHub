import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ContainerLogin } from "./style";
import Header from "../../components/Header";
import { Form } from "../../styles/Form/style";
import Loading from "../../components/Loading";

import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

const Login = ({ setLoading, loading, notify }) => {
  let navigate = useNavigate();
  const [visibility, setVisibility] = useState(false);

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("formato de Email incorreto")
      .required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    setLoading(true);
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((res) => {
        notify("success", "logado com sucesso");
        localStorage.setItem("@TOKEN", res.data.token);
        localStorage.setItem("@USERID", res.data.user.id);
        navigate("/");
        return res;
      })
      .finally(() => setLoading(false))
      .catch((error) => notify("error", "deu erro"));
  };

  return (
    <>
      <Header />
      <ContainerLogin>
        <h1>Login</h1>
        <Form errors={errors} onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="containerInput">
            <div className="ContainerNameAndError">
              <label htmlFor="email">Email</label>
              <span>{errors.email?.message}*</span>
            </div>
            <input
              type="email"
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
            <div className="containerVisibilityPassword">
              <input
                type={visibility ? "text" : "password"}
                placeholder="Digite aqui sua senha"
                id="password"
                {...register("password")}
              />
              <button onClick={() => setVisibility(!visibility)}>
                {visibility ? (
                  <MdOutlineVisibility />
                ) : (
                  <MdOutlineVisibilityOff />
                )}
              </button>
            </div>
          </div>
          <button type="submit">Entrar</button>
        </Form>
        <p>ainda não possui uma conta?</p>
        <button
          className="redirectRegister"
          onClick={() => navigate("/register")}
        >
          Cadastre-se
        </button>
      </ContainerLogin>
      {loading && <Loading />}
    </>
  );
};

export default Login;
