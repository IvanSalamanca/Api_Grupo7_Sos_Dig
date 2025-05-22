import express from "express";
import cookieParser from "cookie-parser";
import { PORT, SECRET_JWT_KEY } from './config.js';
import jwt from "jsonwebtoken";
import fs from "fs";

import comarcaRouter from "./routes/comarca.js";
import horaRouter from "./routes/hora.js";
import instalacionesRouter from "./routes/instalaciones.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", "./views");

app.use((req, res, next) => {
    const token = req.cookies.access_token;
    req.session = { user: null };
    try {
        const data = jwt.verify(token, SECRET_JWT_KEY);
        req.session.user = data;
    } catch (error) {
        req.session.user = null;
    }
    next();
});

app.get("/", (req, res) => {
    const { user } = req.session;
    res.render("index", user);
});

app.use("/comarcas", comarcaRouter);
app.use("/horas", horaRouter);
app.use("/instalaciones", instalacionesRouter);

app.listen(PORT || 3000, () => {
    console.log(`Server listening on port ${PORT || 3000}`);
});