import express from 'express';

import userController
from '../controllers/userController.js';

const router = express.Router();

router.get(
    '/',
    (req, res) => {
        res.redirect('/login');
    }
);

router.get(
    '/login',
    userController.telaLogin
);

router.get(
    '/cadastro',
    userController.telaCadastro
);

router.post(
    '/cadastro',
    userController.cadastrar
);

router.post(
    '/login',
    userController.login
);

router.get(
    '/logout',
    userController.logout
);
// :)
export default router;
