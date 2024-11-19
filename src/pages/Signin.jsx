"use client";
import { useState } from "react";

import classNames from "classnames";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { App } from "../layouts/App";

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = ({ email, password }) => {
    console.log("Criando uma nova conta...", email, password);
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <App>
      <div className="flex items-center justify-center w-screen h-screen flex-col">
        <h1 className="font-sans text-3xl text-sky-500 pb-1">
          Aluritter - Melhor que o X
        </h1>
        <p className="pb-5 text-gray-500">
          Crie uma nova conta e relembre os bons tempos do og twitter 🥲.
        </p>
        <form
          className="flex flex-col w-full lg:w-1/4 md:w-1/3 sm:w-1/2 px-10 sm:px-0"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              {...register("email", {
                require: true,
                maxLength: 255,
                minLength: 5,
              })}
              className={classNames(
                "w-full p-2 border border-slate-400 rounded text-gray-500 placeholder-slate-400",
                {
                  "border-red-500": errors.email?.type === "required",
                },
              )}
              type="email"
              placeholder="email@exemplo.com"
            />
            {errors.email?.type === "required" ? (
              <span className="text-xs text-red-500 pl-1">
                Email é obrigatório!
              </span>
            ) : null}
            {errors.email?.type === "minLength" ? (
              <span className="text-xs text-red-500 pl-1">
                O email precisa ter pelo menos cinco caracteres
              </span>
            ) : null}
          </div>

          <div className="mt-2.5">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Senha
            </label>
            <div className="flex items-center">
              <input
                {...register("password", {
                  required: true,
                  maxLength: 255,
                  minLength: 8,
                })}
                className={classNames(
                  "w-full p-2 border border-slate-400 rounded text-gray-500 placeholder-slate-400",
                  {
                    "border-red-500": !!errors.password,
                  },
                )}
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="text-xs text-gray-500 pl-1"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password?.type === "required" ? (
              <span className="text-xs text-red-500 pl-1"></span>
            ) : null}
          </div>

          <button
            type="submit"
            className="mt-5 p-2 bg-emerald-500 hover:bg-emerald-600 text-slate-100 font-bold rounded"
          >
            Acessar plataforma
          </button>

          <span className="text-sm text-gray-500 mt-2 text-center">
            Não possui uma conta?{" "}
            <Link className="text-sky-500 hover:underline" to="/signup">
              Crie uma agora!
            </Link>
          </span>
        </form>
      </div>
    </App>
  );
};
