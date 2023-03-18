import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../config/firebase.js";
import { success, failure } from "../responses/index.js";

const contactos = collection(db, "contactos");

export const getContact = async (req, res) => {
  try {
    const datos = await getDocs(contactos);
    const { docs } = datos;
    const data = docs.map((doc) => ({ id: doc.id, datos: doc.data() }));
    // return success({ res, data });
    res.render("index", { data });
  } catch (error) {
    return failure({ res, msg: error });
  }
};

export const addContact = async (req, res) => {
  try {
    const { body } = req;
    const data = await addDoc(contactos, body);
    res.redirect("/");
  } catch (error) {
    return failure({ res, msg: error });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const docRef = doc(db, "contactos", id);
    const datos = await deleteDoc(docRef);
    res.redirect("/");
  } catch (error) {
    return failure({ res, msg: error });
  }
};

export const getData = async (req, res) => {
  try {
    const { id } = req.params;
    const docRef = doc(db, "contactos", id);
    const contacto = await getDoc(docRef);
    const data = { id, datos: contacto.data() };
    res.render("contact", { data });
  } catch (error) {
    return failure({ res, mes: error });
  }
};
