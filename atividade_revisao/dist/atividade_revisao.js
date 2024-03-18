"use strict";
// Empresa DigitalMark
class Pessoa {
    nome;
    email;
    telefone;
    data_nascimento;
    endereco;
    cpf;
    genero;
    constructor(nome, email, telefone, data_nascimento, endereco, cpf, genero) {
        this.nome = nome,
            this.email = email,
            this.telefone = telefone,
            this.data_nascimento = data_nascimento,
            this.endereco = endereco,
            this.cpf = cpf,
            this.genero = genero;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
}
;
const pessoa1 = new Pessoa('João', 'joaosenac@gmail.com', '84925746314', new Date(1990, 10, 11), ['rua senaczn 32, Natal'], '42574512302');
class Funcionario extends Pessoa {
    matricula;
    cargo;
    constructor(nome, email, telefone, data_nascimento, endereco, cpf, matricula, cargo, genero) {
        super(nome, email, telefone, data_nascimento, endereco, cpf, genero);
        this.cargo = cargo,
            this.matricula = matricula;
    }
    mostrarDados() {
        console.log('--------------Dados do funcionário-------------');
        console.log('Nome: ${this.nome}');
        console.log('Email: ${this.email}');
        console.log('telefone: ${this.telefone}');
        console.log('Data de Nascimento: ${this.data_nascimento.localeDateString()}');
        console.log('Endereço?: ${this.endereco.join(', ')}');
        console.log('CPF: ${this.cpf}');
        if (this.genero) {
            console.log('Genero: ${this.genero}');
        }
        console.log('Matricula: ${this.matricula}');
        console.log('Cargo: ${this.cargo}');
    }
}
;
const funcionario1 = new Funcionario('Pedro', 'pedrosenac@gmail.com', '84923126548', new Date(1993, 6, 12), ['Rua do Senaczn 45,NatalRN'], '98745632102', '8522741', 'Desenvolvedor UX', ' Masculino');
class Projeto {
    nome;
    descricao;
    data_inicio;
    data_termino;
    status;
    constructor(nome, descricao, data_inicio, data_termino, status) {
        this.nome = nome,
            this.descricao = descricao,
            this.data_inicio = data_inicio,
            this.data_termino = data_termino,
            this.status = status;
    }
}
;
const projeto1 = new Projeto('Controle Total', 'Este projeto ira facilitar o gerenciamento de tarefas', new Date(2022, 1, 2), new Date(2024, 2, 1), 'Em Andamento');
console.log(projeto1);
class Tarefa {
    nome_tarefa;
    descricao;
    responsavel;
    prazo;
    status;
    constructor(nome_tarefa, descricao, responsavel, prazo, status) {
        this.nome_tarefa = nome_tarefa,
            this.descricao = descricao,
            this.responsavel = responsavel,
            this.prazo = prazo,
            this.status = status;
    }
}
;
const tarefa1 = new Tarefa('Desenvolver Site', 'Desenvolver um site para o sistema, que mostrarar o controle dos projetos, prazos e alocação de todos recuros', 'SenacDev', '1 mes', 'Em Andamento');
console.log(tarefa1);
class Equipe {
    nome;
    projeto;
    membros;
    constructor(nome, projeto, membros) {
        this.nome = nome,
            this.projeto = projeto,
            this.membros = membros;
    }
}
;
const equipe1 = new Equipe('Design UX', projeto1, funcionario1);
console.log(equipe1);
