ATIVIDADE REVISÃO

INTRODUCAO
Objetivo deste projeto, é produzir um sistema para que uma empresa possa buscar aprimorar a gestão dos seus projetos e a colaboração entre suas equipes.


COMO FOI DESENVOLVIDO
Toda a codificação, foi produzida em Typescript, visando a facilidade de entender os erros no memento de codificar, e leitura facil para transformar em JavaScript.
Ultilizei 05 Classes para que o funcionamento do sistema fique completo.
As classes são: Pessoa, Funcionario, Tarefa, Projeto e Equipe.

CLASSES E COMO FOI DESENVOLVIDOS

PESSOA: Atributos necessarios para obter informações pessoais, que identifica a pessoa.
Para proteção dos dados de cada pessoa, foi aplicado encapsulamento, com "protected", que permite que outra classe possa puchar informaçõe da classe.

FUNCIONARIO: Iniciado com um "extends" para complementar com atributos de pessoas, e ultilizado proteção de dados private em matricula e cargo, e organizado com "mostrarDados", para que tenha uma impressão mais limpa das informações. Apartir de funcionario teve uma instancia que descreve informações de dois funcionarios, mostrando como ficara as informaçõe de forma organizada.

TAREFA: As tarefas foram acrescentado atributos nescessarios para ter informações de identificação do objetivo da tarefa, acompanhado de descrição.

PROJETO: Todos atributos de projeto é publico, devido a não ter necessidade de esconder informações.

Equipe: Obtendo apenas um atributo proprio, que é o nome da equipe, e os outros dois atributos, pucham informações da classe "Projeto" e "Funcionario".

Licença
O repositório está licenciado sob a Licença MIT, fique a vontade para fazer as modificações necessarias para usar em aula.
