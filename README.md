# 3️⃣ Escrevendo as classes de um Jogo

Autor: **Leandro da Silva Stampini**

## Descrição e validação do projeto

Este projeto implementa o desafio de POO em JavaScript criando um herói de aventura com comportamento de ataque que varia conforme o tipo.

### Como o projeto é validado

A validação é feita executando o arquivo principal e conferindo as mensagens impressas no console.

1. Execute:

```bash
node src/index.js
```

2. O console deve exibir, para cada herói, exatamente o padrão:

```text
o {tipo} atacou usando {ataque}
```

Onde `{ataque}` varia conforme `{tipo}`:

- `mago` → `magia`
- `guerreiro` → `espada`
- `monge` → `artes marciais`
- `ninja` → `shuriken`

Se essas linhas forem exibidas corretamente, o comportamento do método `atacar()` está conforme a especificação do desafio.

### Principais características

- Classe `Heroi` com propriedades `nome`, `idade` e `tipo`.
- Método `atacar()` imprime a frase final exigida pelo desafio.
- Regras de ataque implementadas por decisão (`switch/case`) com base no `tipo`.
- Exemplos de execução criando instâncias (objetos) e chamando `atacar()` em laço (`for...of`).

### O que foi utilizado (mapeamento do desafio)

- Variáveis: `nome`, `idade`, `tipo`, `ataque`, arrays.
- Operadores: atribuição (`=`) e template string para concatenação (`${...}`).
- Laços de repetição: `for...of` para iterar pelos heróis.
- Estruturas de decisão: `switch/case` para escolher o ataque.
- Funções/métodos: `constructor(...)` e `atacar()`.
- Classes e objetos: `class Heroi` e instâncias criadas com `new Heroi(...)`.

## Desafio

Criar uma classe genérica que represente um herói de uma aventura com as propriedades:

- `nome`
- `idade`
- `tipo` (ex: guerreiro, mago, monge, ninja)

E um método `atacar()` que exibe a mensagem:

- `o {tipo} atacou usando {ataque}`

Onde `{ataque}` muda conforme o `{tipo}`:

- mago → usou **magia**
- guerreiro → usou **espada**
- monge → usou **artes marciais**
- ninja → usou **shuriken**

## Estrutura

- `src/index.js`: implementação da classe e exemplos de execução.
- `LICENSE`: licença do projeto.

## Como executar

Pré-requisito: Node.js instalado.

```bash
node src/index.js
```

## Exemplo de saída

```text
o mago atacou usando magia
o guerreiro atacou usando espada
o monge atacou usando artes marciais
o ninja atacou usando shuriken
```
