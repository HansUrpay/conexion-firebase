import express from "express";
import { getContact, addContact, deleteContact } from "./controllers/contacts.js";
// import routes from "./routes/index.js"; RESOLVER IMPORTACION DE ROUTES

const app = express();

app.set("views", "./views"); //indica la ubicacion del directorio views con todas las vistas a renderizar
app.set("view engine", "ejs"); //motor para renderizar las vistas de formato .ejs

app.use(express.json());
app.use(express.static("./styles"));
app.use(express.urlencoded({ extended: true })); //para convertir los datos enviados en el request a objetos JS

app.get("/", getContact);
app.post("/agregar", addContact);
app.get('/borrar/:id', deleteContact)

// routes(app);

export default app;
