const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

// Rota para criar um novo produto
router.post('/', async (req, res) => {
  const { plaqueta, tipo, cor, tamanho, contador } = req.body;
  const produto = await prisma.produtos.create({
    data: { plaqueta, tipo, cor, tamanho, contador },
  });
  res.json(produto);
});

// Rota para obter todos os produtos
router.get('/', async (req, res) => {
  const produtos = await prisma.produtos.findMany();
  res.json(produtos);
});

// Rota para obter um produto por plaqueta
router.get('/:plaqueta', async (req, res) => {
  const { plaqueta } = req.params;
  const produto = await prisma.produtos.findUnique({
    where: { plaqueta: Number(plaqueta) },
  });
  res.json(produto);
});

// Rota para atualizar um produto
router.put('/:plaqueta', async (req, res) => {
  const { plaqueta } = req.params;
  const { tipo, cor, tamanho, contador } = req.body;
  const produto = await prisma.produtos.update({
    where: { plaqueta: Number(plaqueta) },
    data: { tipo, cor, tamanho, contador },
  });
  res.json(produto);
});

// Rota para deletar um produto
router.delete('/:plaqueta', async (req, res) => {
  const { plaqueta } = req.params;
  const produto = await prisma.produtos.delete({
    where: { plaqueta: Number(plaqueta) },
  });
  res.json(produto);
});

module.exports = router;