import express from "express";
import { getContact, addContact } from "./controllers/contacts.js";
// import routes from "./routes/index.js"; RESOLVER IMPORTACION DE ROUTES

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.static("./styles"));
app.use(express.urlencoded({ extended: true }));

app.get("/", getContact);
app.post("/agregar", addContact);

// routes(app);

export default app;
