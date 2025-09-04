import prisma from "../../prisma/prisma.js";

class HairtoneModel {
  // Obter todas as cores de cabelo
  async findAll() {
    const tonsDeCabelo = await prisma.hairtone.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    // console.log(tonsDeCabelo);
    return tonsDeCabelo;
  }

  // Obter uma cor de cabelo pelo ID
  async findById(id) {
    const tonsDeCabelo = await prisma.hairtone.findUnique({
      where: {
        id: Number(id),
      },
    });

    return tonsDeCabelo;
  }

  // Criar uma nova cor de cabelo
  async create(name, image, category) {
    const novoTonsDeCabelo = await prisma.hairtone.create({
      data: {
        name,
        image,
        category,
      },
    });

    return novoTonsDeCabelo;
  }

  // Atualizar uma cor de cabelo
  async update(id, name, image, category) {
    const tonsDeCabelo = await this.findById(id);

    if (!tonsDeCabelo) {
      return null;
    }
    // Atualize a coleção existente com os novos dados
    if (name !== undefined) {
      name = name;
    }
    if (image !== undefined) {
      image = image;
    }
    if (category !== undefined) {
      category = category;
    }

    const tonsDeCabeloAtualizado = await prisma.hairtone.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        image,
        category,
      },
    });

    return tonsDeCabeloAtualizado;
  }

  // Remover uma cor de cabelo
  async delete(id) {
    const tonsDeCabelo = await this.findById(id);

    if (!tonsDeCabelo) {
      return null;
    }

    await prisma.hairtone.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new HairtoneModel();
