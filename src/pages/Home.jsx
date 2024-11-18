import { Link } from "react-router-dom";
import { App } from "../layouts/App";

export const Home = () => {
  console.log("Main page");
  return (
    <App>
      <h1 className="text-xl text-sky-600">HomePage</h1>
      <br />
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
    </App>
  );
};
