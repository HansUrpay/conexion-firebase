import { Router } from "express";
import * as contacts from "./contacts";

const contacts_router = Router();

contacts_router.get("/", contacts.getContacts);

export default contacts_router;
// PENDIENTE DE ENLAZAR CON LAS RUTAS
