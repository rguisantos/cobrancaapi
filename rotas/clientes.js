const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

// Rota para criar um novo cliente
router.post('/', async (req, res) => {
  const { nome, email, telefone } = req.body;
  const cliente = await prisma.clientes.create({
    data: { nome, email, telefone },
  });
  res.json(cliente);
});

// Rota para obter todos os clientes
router.get('/', async (req, res) => {
  const clientes = await prisma.clientes.findMany();
  res.json(clientes);
});

// Rota para obter um cliente por id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const cliente = await prisma.clientes.findUnique({
    where: { id: Number(id) },
  });
  res.json(cliente);
});

// Rota para atualizar um cliente
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone } = req.body;
  const cliente = await prisma.clientes.update({
    where: { id: Number(id) },
    data: { nome, email, telefone },
  });
  res.json(cliente);
});

// Rota para deletar um cliente
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const cliente = await prisma.clientes.delete({
    where: { id: Number(id) },
  });
  res.json(cliente);
});

module.exports = router;