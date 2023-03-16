import app from "./app.js";
import { config } from "dotenv";

config();

const port = process.env.PORT || 8000;


// // app.post("/agregar", async (req, res) => {
// //   const { body } = req;
// //   await Contacto.add(body);
// //   res.send({ msg: "Contact Added" });
// // });

app.listen(port, (req, res) => {
  console.log(`App en http://localhost:${port}`);
});
