import express from "express";
import dbConnect from "./config/books.connections.js";
import router from "./routes/books.routes.js";
import cors from "cors";

const app = express();
app.use(express.json(), cors());
const PORT = process.env.PORT;
dbConnect();

app.use("api/", router);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
