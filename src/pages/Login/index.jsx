import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ContainerLogin } from "./style";
import Header from "../../components/Header";
import { Form } from "../../styles/Form/style";
import Loading from "../../components/Loading";

const Login = ({ setLoading, loading }) => {
  let navigate = useNavigate();

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
        localStorage.setItem("@TOKEN", res.data.token);
        localStorage.setItem("@USERID", res.data.user.id);
        navigate("/");
        return res;
      })
      .finally(() => setLoading(false))
      .catch((error) => console.log(error));
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
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              id="password"
              {...register("password")}
            />
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
