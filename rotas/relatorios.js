const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

// Rota para obter relatório de cobranças
router.get('/cobrancas', async (req, res) => {
  const cobrancas = await prisma.cobranca.findMany();
  res.json(cobrancas);
});

// Rota para obter relatório de produtos
router.get('/produtos', async (req, res) => {
  const produtos = await prisma.produtos.findMany();
  res.json(produtos);
});

// Rota para obter relatório de produtos locados
router.get('/produtosLocados', async (req, res) => {
  const locacoes = await prisma.locacao.findMany({
    where: { dataDevolucao: null }, // considerando que produtos locados são aqueles que ainda não foram devolvidos
    include: { produto: true }, // incluir detalhes do produto na resposta
  });
  res.json(locacoes);
});

// Rota para obter relatório de clientes
router.get('/clientes', async (req, res) => {
  const clientes = await prisma.clientes.findMany();
  res.json(clientes);
});

module.exports = router;