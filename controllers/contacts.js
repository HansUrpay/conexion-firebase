import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../config/firebase.js";
import { success, failure } from "../responses/index.js";

const contactos = collection(db, "contactos");

export const getContact = async (req, res) => {
  try {
    const datos = await getDocs(contactos);
    const data = datos.docs.map((doc) => doc.data());
    // return success({ res, data });
    res.render("index");
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
