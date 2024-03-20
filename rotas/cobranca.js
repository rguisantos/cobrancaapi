const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

// Rota para criar uma nova cobrança
router.post('/', async (req, res) => {
  const { locacaoId, valor, dataCobranca } = req.body;
  const cobranca = await prisma.cobranca.create({
    data: { locacaoId, valor, dataCobranca },
  });
  res.json(cobranca);
});

// Rota para obter todas as cobranças
router.get('/', async (req, res) => {
  const cobrancas = await prisma.cobranca.findMany();
  res.json(cobrancas);
});

// Rota para obter uma cobrança por id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const cobranca = await prisma.cobranca.findUnique({
    where: { id: Number(id) },
  });
  res.json(cobranca);
});

// Rota para atualizar uma cobrança
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { locacaoId, valor, dataCobranca } = req.body;
  const cobranca = await prisma.cobranca.update({
    where: { id: Number(id) },
    data: { locacaoId, valor, dataCobranca },
  });
  res.json(cobranca);
});

// Rota para deletar uma cobrança
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const cobranca = await prisma.cobranca.delete({
    where: { id: Number(id) },
  });
  res.json(cobranca);
});

module.exports = router;