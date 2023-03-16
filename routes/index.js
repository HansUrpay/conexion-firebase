import contacts_router from "../controllers";

const _routes = [["contacts", contacts_router]];

const routes = (app) => {
  _routes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};

export default routes;

// ARREGLAR LAS RUTAS AQUI
