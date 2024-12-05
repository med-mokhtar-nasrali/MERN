import express from "express";
import dbConnect from "./config/mongoose.config.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

dbConnect();

app.listen(PORT, () =>
	console.log(`Listening on PORT: ${PORT}`)
);
