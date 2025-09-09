# 💇‍♀️ Projeto HairTone Back-End

API para gerenciamento de tons de cabelo, desenvolvida com Node.js, Express e Prisma ORM.

---

## 🚀 Como começar

### 1. Clone o repositório

```bash
git clone https://github.com/sosogomess/projeto-back-end01.git
```

### 2. Acesse a pasta do projeto

```bash
cd projeto-back-end01
```

### 3. Crie o arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
PORT=5000
DATABASE_URL="file:./dev.db"
JWT_SECRET="senha que você escolher"
```

> ⚠️ Você pode personalizar a porta e o segredo JWT se desejar.

### 4. Instale as dependências

```bash
npm install
```

### 5. Execute as migrações do banco de dados

```bash
npx prisma migrate dev
```

### 6. Inicie o servidor

```bash
npm run dev
```

---

## 📚 Rotas principais

### Tons de cabelo (HairTone)
- `GET /hairtones` — Lista todos os tons
- `GET /hairtones/:id` — Busca um tom pelo ID
- `POST /hairtones` — Cria um novo tom
- `PUT /hairtones/:id` — Atualiza um tom
- `DELETE /hairtones/:id` — Remove um tom

### Exemplo de requisição para criar um tom

```json
{
  "name": "Loiro Dourado",
  "image": "https://exemplo.com/imagem-loiro.jpg",
  "category": "Loiro"
}
```

---

## 🛠️ Tecnologias utilizadas
- Node.js
- Express
- Prisma ORM
- SQLite (padrão, pode ser adaptado para PostgreSQL)
- Thunder Client (para testes de API)


## 👩‍💻 Autora
- Sophia Gomes

## 💡 Dicas
- Sempre crie o arquivo `.env` antes de rodar o projeto.
- Use Thunder Client ou Postman para testar as rotas.
- Para resetar o banco, use os comandos do Prisma.

---


