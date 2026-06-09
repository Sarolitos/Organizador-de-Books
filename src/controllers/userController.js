import usuarioService from '../services/usuarioService.js';

class UserController {

    async telaLogin(req, res) {

        res.render('login');

    }

    async telaCadastro(req, res) {

        res.render('cadastroUsuario');

    }

    async cadastrar(req, res) {

        try {

            await usuarioService.cadastrarUsuario(
                req.body
            );

            res.redirect('/login');

        } catch (error) {

            res.status(400).send(error.message);

        }

    }

    async login(req, res) {

        try {

            const usuario =
                await usuarioService.autenticar(
                    req.body.email,
                    req.body.senha
                );

            res.cookie(
                'usuarioId',
                usuario.id
            );

            res.redirect('/livros');

        } catch (error) {

            res.status(404).send(error.message);

        }

    }

    async logout(req, res) {

        res.clearCookie(
            'usuarioId'
        );

        res.redirect('/login');

    }

}

export default new UserController();
