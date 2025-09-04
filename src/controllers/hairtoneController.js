import HairtoneModel from "../models/hairtoneModel.js";

class HairtoneController {
  // GET /hairtones
  async getAllHairtones(req, res) {
    try {
      const tonsDeCabelo = await HairtoneModel.findAll();
      res.json(tonsDeCabelo);
    } catch (error) {
      console.error("Erro ao buscar as cores de cabelo:", error);
      res.status(500).json({ error: "Erro ao buscar as cores de cabelo" });
    }
  }

  // GET /hairtones/:id
  async getHairtoneById(req, res) {
    try {
      const { id } = req.params;

      const tonsDeCabelo = await HairtoneModel.findById(id);

      if (!tonsDeCabelo) {
        return res.status(404).json({ error: "Cor de cabelo não encontrada!" });
      }

      res.json(tonsDeCabelo);
    } catch (error) {
      console.error("Erro ao buscar cor de cabelo:", error);
      res.status(500).json({ error: "Erro ao buscar cor de cabelo!" });
    }
  }

  // POST /hairtones
  async createHairtone(req, res) {
    try {
      // Validação básica
      const { name, image, category } = req.body;

      // Verifica se todos os campos da coleção foram fornecidos
      if (!name || !image || !category) {
        return res.status(400).json({
          error: "Os campos nome, imagem e categoria são obrigatórios",
        });
      }

      // Criar a nova cor de cabelo
      const newHairtone = await prisma.hairColor.create(name, image, category);

      if (!newHairtone) {
        return res.status(400).json({ error: "Erro ao criar cor de cabelo" });
      }

      res.status(201).json({
        message: "Cor de cabelo criada com sucesso",
        hairtone: newHairtone,
      });
    } catch (error) {
      console.error("Erro ao criar cor de cabelo:", error);
      res.status(500).json({ error: "Erro ao criar cor de cabelo" });
    }
  }

  // PUT /hairtones/:id
  async updateHairtone(req, res) {
    try {
      const { id } = req.params;
      const { name, image, category } = req.body;

      // Atualizar a cor de cabelo
      const updatedHairtone = await HairtoneModel.update(
        id,
        name,
        image,
        category
      );

      if (!updatedHairtone) {
        return res.status(404).json({ error: "Cor de cabelo não encontrada" });
      }

      res.json(updatedHairtone);
    } catch (error) {
      console.error("Erro ao atualizar cor de cabelo:", error);
      res.status(500).json({ error: "Erro ao atualizar cor de cabelo!" });
    }
  }

  // DELETE /hairtones/:id
  async deleteHairtone(req, res) {
    try {
      const { id } = req.params;

      // Remover a cor de cabelo
      const result = await HairtoneModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Cor de cabelo não encontrada!" });
      }

      res.status(200).json({
        message: "Cor de cabelo removida com sucesso",
      });
    } catch (error) {
      console.error("Erro ao remover cor de cabelo:", error);
      res.status(500).json({ error: "Erro ao remover cor de cabelo!" });
    }
  }
}

export default new HairtoneController();
