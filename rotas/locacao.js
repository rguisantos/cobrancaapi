const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

// Rota para criar uma nova locação
router.post('/', async (req, res) => {
  const { clienteId, produtoId, dataLocacao, dataDevolucao } = req.body;
  const locacao = await prisma.locacao.create({
    data: { clienteId, produtoId, dataLocacao, dataDevolucao },
  });
  res.json(locacao);
});

// Rota para obter todas as locações
router.get('/', async (req, res) => {
  const locacoes = await prisma.locacao.findMany();
  res.json(locacoes);
});

// Rota para obter uma locação por id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const locacao = await prisma.locacao.findUnique({
    where: { id: Number(id) },
  });
  res.json(locacao);
});

// Rota para atualizar uma locação
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { clienteId, produtoId, dataLocacao, dataDevolucao } = req.body;
  const locacao = await prisma.locacao.update({
    where: { id: Number(id) },
    data: { clienteId, produtoId, dataLocacao, dataDevolucao },
  });
  res.json(locacao);
});

// Rota para deletar uma locação
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const locacao = await prisma.locacao.delete({
    where: { id: Number(id) },
  });
  res.json(locacao);
});

module.exports = router;