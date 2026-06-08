import livroService from '../services/livroService.js';

class LivroController {

    async listar(req, res) {

        try {

            const livros =
                await livroService.listarLivros();

            res.render(
                'index',
                { livros }
            );

        } catch (error) {

            res.send(error.message);

        }

    }

    async telaCadastro(req, res) {

        res.render(
            'cadastrarLivro'
        );

    }

    async cadastrar(req, res) {

        try {

            req.body.usuarioId =
                req.cookies.usuarioId;

            await livroService.cadastrarLivro(
                req.body
            );

            res.redirect('/livros');

        } catch (error) {

            res.send(error.message);

        }

    }

    async telaEditar(req, res) {

        try {

            const livro =
                await livroService.buscarPorId(
                    req.params.id
                );

            res.render(
                'editarLivro',
                { livro }
            );

        } catch (error) {

            res.send(error.message);

        }

    }

    async atualizar(req, res) {

        try {

            await livroService.atualizarLivro(
                req.params.id,
                req.body
            );

            res.redirect('/livros');

        } catch (error) {

            res.send(error.message);

        }

    }

    async excluir(req, res) {

        try {

            await livroService.deletarLivro(
                req.params.id
            );

            res.redirect('/livros');

        } catch (error) {

            res.send(error.message);

        }

    }

}

export default new LivroController();