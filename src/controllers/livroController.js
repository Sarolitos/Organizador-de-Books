import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LivroService {

    validarLivro(livro) {

        if (!livro.titulo || livro.titulo.trim() === '') {
            throw new Error(
                'O título é obrigatório.'
            );
        }

        if (!livro.autor || livro.autor.trim() === '') {
            throw new Error(
                'O autor é obrigatório.'
            );
        }

        if (!livro.genero || livro.genero.trim() === '') {
            throw new Error(
                'O gênero é obrigatório.'
            );
        }

        if (!livro.sinopse || livro.sinopse.trim() === '') {
            throw new Error(
                'A sinopse é obrigatória.'
            );
        }

        if (
            !livro.anoPublicacao ||
            livro.anoPublicacao < 1000
        ) {
            throw new Error(
                'Ano de publicação inválido.'
            );
        }
    }

    async listarLivros() {

        return await prisma.livro.findMany({
            include: {
                usuario: true
            }
        });

    }

    async buscarLivros(busca) {

    return await prisma.livro.findMany({
        where: {
            OR: [
                {
                    titulo: {
                        contains: busca
                    }
                },
                {
                    autor: {
                        contains: busca
                    }
                },
                {
                    genero: {
                        contains: busca
                    }
                }
            ]
        },
        include: {
            usuario: true
        }
    });

}

    async buscarPorId(id) {

        return await prisma.livro.findUnique({
            where: {
                id: Number(id)
            }
        });

    }

    async cadastrarLivro(dados) {

        this.validarLivro(dados);

        return await prisma.livro.create({
            data: {
                titulo: dados.titulo,
                autor: dados.autor,
                genero: dados.genero,
                anoPublicacao: Number(
                    dados.anoPublicacao
                ),
                sinopse: dados.sinopse,
                usuarioId: Number(
                    dados.usuarioId
                )
            }
        });

    }

    async atualizarLivro(id, dados) {

        this.validarLivro(dados);

        return await prisma.livro.update({
            where: {
                id: Number(id)
            },
            data: {
                titulo: dados.titulo,
                autor: dados.autor,
                genero: dados.genero,
                anoPublicacao: Number(
                    dados.anoPublicacao
                ),
                sinopse: dados.sinopse
            }
        });

    }

    async deletarLivro(id) {

        return await prisma.livro.delete({
            where: {
                id: Number(id)
            }
        });

    }
}

export default new LivroService();import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LivroService {

    validarLivro(livro) {

        if (!livro.titulo || livro.titulo.trim() === '') {
            throw new Error(
                'O título é obrigatório.'
            );
        }

        if (!livro.autor || livro.autor.trim() === '') {
            throw new Error(
                'O autor é obrigatório.'
            );
        }

        if (!livro.genero || livro.genero.trim() === '') {
            throw new Error(
                'O gênero é obrigatório.'
            );
        }

        if (!livro.sinopse || livro.sinopse.trim() === '') {
            throw new Error(
                'A sinopse é obrigatória.'
            );
        }

        if (
            !livro.anoPublicacao ||
            livro.anoPublicacao < 1000
        ) {
            throw new Error(
                'Ano de publicação inválido.'
            );
        }
    }

    async listarLivros() {

        return await prisma.livro.findMany({
            include: {
                usuario: true
            }
        });

    }

    async buscarLivros(busca) {

    return await prisma.livro.findMany({
        where: {
            OR: [
                {
                    titulo: {
                        contains: busca
                    }
                },
                {
                    autor: {
                        contains: busca
                    }
                },
                {
                    genero: {
                        contains: busca
                    }
                }
            ]
        },
        include: {
            usuario: true
        }
    });

}

    async buscarPorId(id) {

        return await prisma.livro.findUnique({
            where: {
                id: Number(id)
            }
        });

    }

    async cadastrarLivro(dados) {

        this.validarLivro(dados);

        return await prisma.livro.create({
            data: {
                titulo: dados.titulo,
                autor: dados.autor,
                genero: dados.genero,
                anoPublicacao: Number(
                    dados.anoPublicacao
                ),
                sinopse: dados.sinopse,
                usuarioId: Number(
                    dados.usuarioId
                )
            }
        });

    }

    async atualizarLivro(id, dados) {

        this.validarLivro(dados);

        return await prisma.livro.update({
            where: {
                id: Number(id)
            },
            data: {
                titulo: dados.titulo,
                autor: dados.autor,
                genero: dados.genero,
                anoPublicacao: Number(
                    dados.anoPublicacao
                ),
                sinopse: dados.sinopse
            }
        });

    }

    async deletarLivro(id) {

        return await prisma.livro.delete({
            where: {
                id: Number(id)
            }
        });

    }
}

export default new LivroService();import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LivroService {

    validarLivro(livro) {

        if (!livro.titulo || livro.titulo.trim() === '') {
            throw new Error(
                'O título é obrigatório.'
            );
        }

        if (!livro.autor || livro.autor.trim() === '') {
            throw new Error(
                'O autor é obrigatório.'
            );
        }

        if (!livro.genero || livro.genero.trim() === '') {
            throw new Error(
                'O gênero é obrigatório.'
            );
        }

        if (!livro.sinopse || livro.sinopse.trim() === '') {
            throw new Error(
                'A sinopse é obrigatória.'
            );
        }

        if (
            !livro.anoPublicacao ||
            livro.anoPublicacao < 1000
        ) {
            throw new Error(
                'Ano de publicação inválido.'
            );
        }
    }

    async listarLivros() {

        return await prisma.livro.findMany({
            include: {
                usuario: true
            }
        });

    }

    async buscarLivros(busca) {

    return await prisma.livro.findMany({
        where: {
            OR: [
                {
                    titulo: {
                        contains: busca
                    }
                },
                {
                    autor: {
                        contains: busca
                    }
                },
                {
                    genero: {
                        contains: busca
                    }
                }
            ]
        },
        include: {
            usuario: true
        }
    });

}

    async buscarPorId(id) {

        return await prisma.livro.findUnique({
            where: {
                id: Number(id)
            }
        });

    }

    async cadastrarLivro(dados) {

        this.validarLivro(dados);

        return await prisma.livro.create({
            data: {
                titulo: dados.titulo,
                autor: dados.autor,
                genero: dados.genero,
                anoPublicacao: Number(
                    dados.anoPublicacao
                ),
                sinopse: dados.sinopse,
                usuarioId: Number(
                    dados.usuarioId
                )
            }
        });

    }

    async atualizarLivro(id, dados) {

        this.validarLivro(dados);

        return await prisma.livro.update({
            where: {
                id: Number(id)
            },
            data: {
                titulo: dados.titulo,
                autor: dados.autor,
                genero: dados.genero,
                anoPublicacao: Number(
                    dados.anoPublicacao
                ),
                sinopse: dados.sinopse
            }
        });

    }

    async deletarLivro(id) {

        return await prisma.livro.delete({
            where: {
                id: Number(id)
            }
        });

    }
}

export default new LivroService();
