import express from "express"
import * as dotenv from "dotenv"
import {uuid} from 'uuidv4'
import userRoute from "./routes/user.routes.js";

//habilitar o servidor para ter variáveis de ambiente
dotenv.config()

//instanciar o express
const app = express()

//configurar para aceitar/enviar json
app.use(express.json())
app.use("/user", userRoute);


// o servidor subindo pro ar.
app.listen(process.env.PORT, () => {
    console.log(`App up and running on port http://localhost:${process.env.PORT}`);
  });
  