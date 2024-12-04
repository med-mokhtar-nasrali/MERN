import express from "express";
import router from "../Modulized/routes/user.routes.js";
const app = express();
const port = 8000;

//--MIDDLEWARE--
app.use(express.json());
app.use("/api", router);
app.listen(port, () => console.log(`Server is ON port: ${port}`));
