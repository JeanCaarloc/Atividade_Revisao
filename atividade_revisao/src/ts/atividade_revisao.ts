// Empresa DigitalMark
// Necessita das classe Pessoa e Funcionario, para que aja informações complementares de projeto, equipe e tarefa.
class Pessoa{
    public nome: string;
    public email: string;
    protected telefone: string; // Aplicação de proteção dos dados, utilizado modelo protected em vez de private, pois a classe Pessoa sera uma extensão de outra classe. 
    protected data_nascimento: Date;
    protected endereco: string[];
    protected cpf: string;
    genero?: string;
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


class Funcionario extends Pessoa{
    private matricula: string;
    private cargo: string;

    constructor(nome: string, email: string, telefone: string, data_nascimento: Date, endereco: string[], cpf: string, matricula: string, cargo: string, genero?: string){
        super(nome, email, telefone, data_nascimento, endereco, cpf, genero);

        this.cargo = cargo,
        this.matricula = matricula
    }

    mostrarDados(): void {  
        
        console.log(`--------------Dados do funcionários-------------`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Email: ${this.email}`);
        console.log(`telefone: ${this.telefone}`);
        console.log(`Data de Nascimento: ${this.data_nascimento.toLocaleDateString()}`);
        console.log(`Endereço?: ${this.endereco.join(', ')}`);
        console.log(`CPF: ${this.cpf}`);
        
        if (this.genero) {
            console.log(`Genero: ${this.genero}`);
        }

        console.log(`Matricula: ${this.matricula}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log('------------------------------------------------');
    }
    
};

const funcionario1 = new Funcionario('Pedro', 'pedrosenac@gmail.com','84923126548',new Date(1993,6,12),['Rua do Senaczn 45,NatalRN'],'98745632102', '8522741', 'Desenvolvedor UX',' Masculino');
const funcionario2 = new Funcionario('João', 'joaosenac@gmail.com', '84925746314', new Date(1990,10,11),['rua senaczn 32, Natal'],'42574512302','5184615','Devolps','Masculino' );

class Tarefa{
    public nome_tarefa: string;
    public descricao: string;
    private responsavel: string;
    public prazo: string;
    public status: string;
    constructor(nome_tarefa: string, descricao: string, responsavel: string, prazo: string, status: string){
        this.nome_tarefa = nome_tarefa,
        this.descricao = descricao,
        this.responsavel = responsavel,
        this.prazo = prazo,
        this.status = status
    }

    mostrarDados(): void{

        console.log(`--------------Dados das Tarefas-------------`);
        console.log(`Tarefa: ${this.nome_tarefa}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Responsavel: ${this.responsavel}`);
        console.log(`Prazo de Entrega: ${this.prazo}`);
        console.log(`Status: ${this.status}`);
        console.log('------------------------------------------------');
    }
};

const tarefa1 = new Tarefa('Desenvolver Site', 'Desenvolver um site para o sistema, que mostrarar o controle dos projetos, prazos e alocação de todos recuros', 'SenacDev', '1 mes', 'Em Andamento');



class Projeto{
    public nome: string;
    public descricao: string;
    public data_inicio: Date;
    public data_termino: Date;
    public status: string;
    public multi_tarefas:Tarefa;
    constructor(nome: string, descricao: string, data_inicio: Date, data_termino: Date, status: string, multi_tarefas: Tarefa){
        this.nome = nome,
        this.descricao = descricao,
        this.data_inicio = data_inicio,
        this.data_termino = data_termino,
        this.status = status,
        this.multi_tarefas = multi_tarefas
    }

    mostrarDados(): void {
    console.log(`--------------Dados dos Projetos-------------`);
        console.log(`Nome do Projeto: ${this.nome}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Data de Inicio: ${this.data_inicio.toLocaleDateString('pt-br')}`);
        console.log(`Data de Termino: ${this.data_termino.toLocaleDateString('pt-br')}`);
        console.log(`Status: ${this.status}`);
        console.log(`Tarefas aplicadas no projeto: ${tarefa1.nome_tarefa}`);
        console.log('------------------------------------------------');
    }
};

const projeto1 = new Projeto('Controle Total', 'Este projeto ira facilitar o gerenciamento de tarefas', new Date(2022,1,2), new Date(2024,2,1), 'Em Andamento', tarefa1);


class Equipe{
    public nome: string;
    public projeto: Projeto;
    public membros: Funcionario; 
    constructor(nome: string, projeto: Projeto, membros: Funcionario){
        this.nome = nome,
        this.projeto = projeto,
        this.membros = membros
    }

    mostrarDados(): void {
        console.log(`--------------Dados de Equipes-------------`);
        console.log(`Nome da Equipe: ${this.nome}`);
        console.log(`Projetos: ${projeto1.nome}`);
        console.log(`Membros: ${funcionario1.nome},${funcionario2.nome}`);
        console.log('------------------------------------------------');
    }
};

const equipe1 = new Equipe('Design UX', projeto1,funcionario1);



funcionario1.mostrarDados()
funcionario2.mostrarDados()
tarefa1.mostrarDados()
projeto1.mostrarDados()
equipe1.mostrarDados()