export default class Usuario {

    #id;
    #nome;
    #email;
    #senha;

    constructor(
        id,
        nome,
        email,
        senha
    ) {
        this.#id = id;
        this.#nome = nome;
        this.#email = email;
        this.#senha = senha;
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get email() {
        return this.#email;
    }

    get senha() {
        return this.#senha;
    }

    set nome(valor) {
        this.#nome = valor;
    }

    set email(valor) {
        this.#email = valor;
    }

    set senha(valor) {
        this.#senha = valor;
    }
}