import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UsuarioService {

    validarUsuario(usuario) {

        if (
            !usuario.nome ||
            usuario.nome.trim() === ''
        ) {
            throw new Error(
                'Nome obrigatório.'
            );
        }

        if (
            !usuario.email ||
            usuario.email.trim() === ''
        ) {
            throw new Error(
                'Email obrigatório.'
            );
        }

        if (
            !usuario.email.includes('@')
        ) {
            throw new Error(
                'Email inválido.'
            );
        }

        if (
            !usuario.senha ||
            usuario.senha.length < 6
        ) {
            throw new Error(
                'A senha deve ter pelo menos 6 caracteres.'
            );
        }
    }

    async listarUsuarios() {

        return await prisma.usuario.findMany();

    }

    async buscarPorEmail(email) {

        return await prisma.usuario.findUnique({
            where: {
                email
            }
        });

    }

    async buscarPorId(id) {

        return await prisma.usuario.findUnique({
            where: {
                id: Number(id)
            }
        });

    }

    async cadastrarUsuario(dados) {

        this.validarUsuario(dados);

        return await prisma.usuario.create({
            data: {
                nome: dados.nome,
                email: dados.email,
                senha: dados.senha
            }
        });

    }

    async autenticar(email, senha) {

        const usuario =
            await this.buscarPorEmail(
                email
            );

        if (!usuario) {
            throw new Error(
                'Usuário não encontrado.'
            );
        }

        if (
            usuario.senha !== senha
        ) {
            throw new Error(
                'Senha incorreta.'
            );
        }

        return usuario;
    }
}

export default new UsuarioService();