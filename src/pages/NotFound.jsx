import { App } from "../layouts/App";

export const NotFound = () => {
  console.log("This page doesnt exist");
  return (
    <App>
      <h1 className="text-x1 text-red-600">Esta pagina non existe.</h1>
    </App>
  );
};
