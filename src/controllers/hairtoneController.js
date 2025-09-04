import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class HairtoneController {
  // GET /hairtones - Buscar todas as cores de cabelo
  async getAllHairtones(req, res) {
    try {
      const { category } = req.query;
      
      const whereClause = category ? { category } : {};
      
      const hairtones = await prisma.hairColor.findMany({
        where: whereClause,
        orderBy: { id: 'asc' }
      });
      
      res.json(hairtones);
    } catch (error) {
      console.error("Erro ao buscar as cores de cabelo:", error);
      res.status(500).json({ error: "Erro ao buscar as cores de cabelo" });
    }
  }

  // GET /hairtones/:id - Buscar cor de cabelo por ID
  async getHairtoneById(req, res) {
    try {
      const { id } = req.params;

      const hairtone = await prisma.hairColor.findUnique({
        where: { id: parseInt(id) }
      });

      if (!hairtone) {
        return res.status(404).json({ error: "Cor de cabelo não encontrada!" });
      }

      res.json(hairtone);
    } catch (error) {
      console.error("Erro ao buscar cor de cabelo:", error);
      res.status(500).json({ error: "Erro ao buscar cor de cabelo!" });
    }
  }

  // POST /hairtones - Criar nova cor de cabelo
  async createHairtone(req, res) {
    try {
      const { name, image, category } = req.body;

      // Validação básica
      if (!name || !image || !category) {
        return res.status(400).json({
          error: "Os campos nome, imagem e categoria são obrigatórios",
        });
      }

      // Criar a nova cor de cabelo
      const newHairtone = await prisma.hairColor.create({
        data: {
          name,
          image,
          category
        }
      });

      res.status(201).json({
        message: "Cor de cabelo criada com sucesso",
        hairtone: newHairtone,
      });
    } catch (error) {
      console.error("Erro ao criar cor de cabelo:", error);
      res.status(500).json({ error: "Erro ao criar cor de cabelo" });
    }
  }

  // PUT /hairtones/:id - Atualizar cor de cabelo
  async updateHairtone(req, res) {
    try {
      const { id } = req.params;
      const { name, image, category } = req.body;

      // Verificar se a cor existe
      const existingHairtone = await prisma.hairColor.findUnique({
        where: { id: parseInt(id) }
      });

      if (!existingHairtone) {
        return res.status(404).json({ error: "Cor de cabelo não encontrada" });
      }

      // Atualizar a cor de cabelo
      const updatedHairtone = await prisma.hairColor.update({
        where: { id: parseInt(id) },
        data: {
          name: name || existingHairtone.name,
          image: image || existingHairtone.image,
          category: category || existingHairtone.category
        }
      });

      res.json({
        message: "Cor de cabelo atualizada com sucesso",
        hairtone: updatedHairtone
      });
    } catch (error) {
      console.error("Erro ao atualizar cor de cabelo:", error);
      res.status(500).json({ error: "Erro ao atualizar cor de cabelo!" });
    }
  }

  // DELETE /hairtones/:id - Deletar cor de cabelo
  async deleteHairtone(req, res) {
    try {
      const { id } = req.params;

      // Verificar se a cor existe
      const existingHairtone = await prisma.hairColor.findUnique({
        where: { id: parseInt(id) }
      });

      if (!existingHairtone) {
        return res.status(404).json({ error: "Cor de cabelo não encontrada!" });
      }

      // Remover a cor de cabelo
      await prisma.hairColor.delete({
        where: { id: parseInt(id) }
      });

      res.status(200).json({
        message: "Cor de cabelo removida com sucesso",
      });
    } catch (error) {
      console.error("Erro ao remover cor de cabelo:", error);
      res.status(500).json({ error: "Erro ao remover cor de cabelo!" });
    }
  }

  // GET /hairtones/categories - Buscar todas as categorias disponíveis
  async getCategories(req, res) {
    try {
      const categories = await prisma.hairColor.findMany({
        select: { category: true },
        distinct: ['category']
      });

      const categoryList = categories.map(item => item.category);
      
      res.json(categoryList);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
      res.status(500).json({ error: "Erro ao buscar categorias" });
    }
  }
}

export default new HairtoneController();
