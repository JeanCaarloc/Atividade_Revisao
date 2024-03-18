// Empresa DigitalMark
class Pessoa{
    protected nome: string;
    protected email: string;
    protected telefone: string;
    protected data_nascimento: Date;
    protected endereco: string[];
    protected cpf: string;
    protected genero?: string;
constructor(nome: string, email: string, telefone: string, data_nascimento: Date, endereco: string[], cpf: string, genero?: string){
    this.nome = nome,
    this.email = email,
    this.telefone = telefone,
    this.data_nascimento = data_nascimento,
    this.endereco = endereco,
    this.cpf = cpf,
    this.genero = genero
    }

    getCpf(): string {
        return this.cpf;
    }

    setCpf(cpf: string): void {
        this.cpf = cpf;
    }

};

const pessoa1 = new Pessoa('João', 'joaosenac@gmail.com', '84925746314', new Date(1990,10,11),['rua senaczn 32, Natal'],'42574512302' );

class Funcionario extends Pessoa{
    private matricula: string;
    private cargo: string;

    constructor(nome: string, email: string, telefone: string, data_nascimento: Date, endereco: string[], cpf: string, matricula: string, cargo: string, genero?: string){
        super(nome, email, telefone, data_nascimento, endereco, cpf, genero);

        this.cargo = cargo,
        this.matricula = matricula
    }

    mostrarDados(): void {
        
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
};

const funcionario1 = new Funcionario('Pedro', 'pedrosenac@gmail.com','84923126548',new Date(1993,6,12),['Rua do Senaczn 45,NatalRN'],'98745632102', '8522741', 'Desenvolvedor UX',' Masculino');


class Projeto{
    private nome: string;
    private descricao: string;
    private data_inicio: Date;
    private data_termino: Date;
    private status: string;
    constructor(nome: string, descricao: string, data_inicio: Date, data_termino: Date, status: string){
        this.nome = nome,
        this.descricao = descricao,
        this.data_inicio = data_inicio,
        this.data_termino = data_termino,
        this.status = status
    }
};

const projeto1 = new Projeto('Controle Total', 'Este projeto ira facilitar o gerenciamento de tarefas', new Date(2022,1,2), new Date(2024,2,1), 'Em Andamento');

console.log(projeto1);

class Tarefa{
    private nome_tarefa: string;
    private descricao: string;
    private responsavel: string;
    private prazo: string;
    private status: string;
    constructor(nome_tarefa: string, descricao: string, responsavel: string, prazo: string, status: string){
        this.nome_tarefa = nome_tarefa,
        this.descricao = descricao,
        this.responsavel = responsavel,
        this.prazo = prazo,
        this.status = status
    }
};

const tarefa1 = new Tarefa('Desenvolver Site', 'Desenvolver um site para o sistema, que mostrarar o controle dos projetos, prazos e alocação de todos recuros', 'SenacDev', '1 mes', 'Em Andamento');

console.log(tarefa1);


class Equipe{
    private nome: string;
    private projeto: Projeto;
    private membros: Funcionario; 
    constructor(nome: string, projeto: Projeto, membros: Funcionario){
        this.nome = nome,
        this.projeto = projeto,
        this.membros = membros
    }
};

const equipe1 = new Equipe('Design UX', projeto1,funcionario1);

console.log(equipe1);

