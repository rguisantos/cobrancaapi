const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

// Rota para criar um novo usuário
router.post('/', async (req, res) => {
  const { nome, email, senha } = req.body;
  const usuario = await prisma.usuario.create({
    data: { nome, email, senha },
  });
  res.json(usuario);
});

// Rota para obter todos os usuários
router.get('/', async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
});

// Rota para obter um usuário por id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const usuario = await prisma.usuario.findUnique({
    where: { id: Number(id) },
  });
  res.json(usuario);
});

// Rota para atualizar um usuário
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  const usuario = await prisma.usuario.update({
    where: { id: Number(id) },
    data: { nome, email, senha },
  });
  res.json(usuario);
});

// Rota para deletar um usuário
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const usuario = await prisma.usuario.delete({
    where: { id: Number(id) },
  });
  res.json(usuario);
});

module.exports = router;