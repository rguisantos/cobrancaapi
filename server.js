const express = require('express');
const produtosRouter = require('./cobrancaapi/rotas/produtos');
const clientesRouter = require('./cobrancaapi/rotas/clientes');
const locacaoRouter = require('./cobrancaapi/rotas/locacao');
const cobrancaRouter = require('./cobrancaapi/rotas/cobranca');
const relatoriosRouter = require('./cobrancaapi/rotas/relatorios');
const usuariosRouter = require('./cobrancaapi/rotas/usuarios');

const app = express();

app.use(express.json());
app.use('/produtos', produtosRouter);
app.use('/clientes', clientesRouter);
app.use('/locacao', locacaoRouter);
app.use('/cobranca', cobrancaRouter);
app.use('/relatorios', relatoriosRouter);
app.use('/usuarios', usuariosRouter);

app.listen(3000, () => console.log('Server is running on port 3000'));