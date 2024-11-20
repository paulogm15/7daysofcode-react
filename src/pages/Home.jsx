import { Link } from "react-router-dom";
import { App } from "../layouts/App";
import { useState } from "react";

export const Home = () => {
  const [message, setMessage] = useState("");

  const handleLogout = () => {
    console.log("SAINDO DA APLICACAO");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("novo tweet");
  };

  return (
    <App>
      <div id="screen" className="relative bg-gray-100 min-h-screen w-screen">
        <div
          id="header"
          className="flex justify-between px-5 py-2 border-b bg-white flex-grow"
        >
          <span className="font-sans text-lg text-sky-500 lowercase">
            Aluritter
          </span>
          <div>
            <span className="font-sans text-sm text-gray-500 mr-2">
              email@email.com
            </span>
            <button
              className="bg-red-500 text-white lowecase rounded px-2 py-1 text-sm hover:bg-red-700"
              onClick={handleLogout}
              type="button"
            >
              Sair
            </button>
          </div>
        </div>
        <div className="container mx-auto p-10">
          <form onSubmit={handleFormSubmit}>
            <p className="text-sm text-gray-600 pl-2">Alurite agora mesmo...</p>
            <div>
              <textarea
                className="border rounded w-full resize-none text-gray-500 p-5 my-2"
                maxLength={255}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                value={message}
              />
            </div>
            <div className="flex justify-between">
              {message.length < 255 ? (
                <p className="text-sm text-green-600">
                  Voce ainda poder digitar {255 - message.length} caracteres
                </p>
              ) : (
                <p className="text-sm text-red-600">
                  Voce esgotou a quantidade de caracteres
                </p>
              )}
              <button className="bg-sky-500 p-2 rounded text-white hover:bg-sky-600">
                alurittar
              </button>
            </div>
          </form>
          <div className="pt-5">
            <div className="border px-4 py-2 bg-white rounded mt-5 first:mt-0">
              <p className="text-gray-500 py-2 mb-5">
                Seven7DaysOfCode com React =D
              </p>
              <div className="flex justify-between">
                <span className="text-sm text-sky-500">email@email.com</span>
                <time className="text-xs text-gray-500">
                  18/11/2024 10:27:00 pm
                </time>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full px-4 text-center bg-gray-800 text-white">
          <Link to="/signup">Ir para o SignUp </Link>
          <br />
          <a
            target="_blank"
            href="https://icons8.com/icon/437/twitter"
            className="text-sky-500"
          >
            Twitter{" "}
          </a>
          icon by{" "}
          <a target="_blank" href="https://icons8.com" className="text-sky-500">
            Icons8
          </a>
          <p>© 2024 - Amigos produções</p>
        </div>
      </div>
    </App>
  );
};
