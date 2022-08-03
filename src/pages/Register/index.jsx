import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ContainerRegister } from "./style";

const Register = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatório"),
    confirmPassword: yup.string().required("Você deve repetir a senha"),
    bio: yup.string().required("Bio é obrigatório"),
    contact: yup.string().required("Contato é obrigatório"),
    course_module: yup.string().required("Modulo é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <ContainerRegister>
      <div>
        <h1>Crie sua conta</h1>
        <p>Rapido e grátis, vamos nessa</p>
      </div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          placeholder="Digite aqui seu nome"
          id="name"
          {...register("name")}
        />
        <span>*{errors.name?.message}</span>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Digite aqui seu email"
          id="email"
          {...register("email")}
        />
        <span>*{errors.email?.message}</span>

        <label htmlFor="password">Senha</label>
        <input
          type="text"
          placeholder="Digite aqui sua senha"
          id="password"
          {...register("password")}
        />
        <span>*{errors.password?.message}</span>

        <label htmlFor="confirmPassword">Confirmar senha</label>
        <input
          type="text"
          placeholder="Digite novamente sua senha"
          id="confirmPassword"
          {...register("confirmPassword")}
        />
        <span>*{errors.confirmPassword?.message}</span>

        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          placeholder="Fale sobre você"
          id="bio"
          {...register("bio")}
        />
        <span>*{errors.bio?.message}</span>

        <label htmlFor="contact">Contato</label>
        <input
          type="text"
          placeholder="linkedin/in/seuUsuario"
          id="contact"
          {...register("contact")}
        />
        <span>*{errors.contact?.message}</span>

        <label htmlFor="course_module">Selecionar módulo</label>
        <select id="course_module" {...register("course_module")}>
          <option value="Primeiro modulo">Primeiro modulo</option>
          <option value="Segundo modulo">Segundo modulo</option>
          <option value="Terceiro modulo">Terceiro modulo</option>
          <option value="Quarto modulo">Quarto modulo</option>
          <option value="Quinto modulo">Quinto modulo</option>
          <option value="Sexto modulo">Sexto modulo</option>
        </select>
        <span>*{errors.course_module?.message}</span>

        <button type="submit">Registrar</button>
      </form>
    </ContainerRegister>
  );
};

export default Register;
