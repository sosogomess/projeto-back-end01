import express from "express";

// Importar todas as rotas

import hairtoneRouter from "./hairtoneRoutes.js";


const router = express.Router();

// Rotas públicas

router.use("/hairtones", hairtoneRouter);


export default router;
