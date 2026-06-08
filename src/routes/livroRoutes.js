import express from 'express';

import livroController
from '../controllers/livroController.js';

import authMiddleware
from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get(
    '/',
    authMiddleware,
    livroController.listar
);

router.get(
    '/novo',
    authMiddleware,
    livroController.telaCadastro
);

router.post(
    '/novo',
    authMiddleware,
    livroController.cadastrar
);

router.get(
    '/editar/:id',
    authMiddleware,
    livroController.telaEditar
);

router.post(
    '/editar/:id',
    authMiddleware,
    livroController.atualizar
);

router.get(
    '/excluir/:id',
    authMiddleware,
    livroController.excluir
);

export default router;