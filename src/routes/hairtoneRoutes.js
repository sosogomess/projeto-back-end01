import express from "express";
import hairtoneController from "../controllers/hairtoneController.js";

const hairtoneRouter = express.Router();

// Rotas de Cores
// GET /cores - Listar todas as Cores
hairtoneRouter.get("/", hairtoneController.getAllHairtones);

// GET /cores/:id - Obter uma Cor pelo ID
hairtoneRouter.get("/:id", hairtoneController.getHairtoneById);

// POST /cores - Criar uma nova Cor
hairtoneRouter.post("/", hairtoneController.createHairtone);

// PUT /cores/:id - Atualizar uma Cor
hairtoneRouter.put("/:id", hairtoneController.updateHairtone);

// DELETE /cores/:id - Remover uma Cor
hairtoneRouter.delete("/:id", hairtoneController.deleteHairtone);

export default hairtoneRouter;
