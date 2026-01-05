# 3️⃣ Escrevendo as classes de um Jogo

Autor: **Leandro da Silva Stampini**

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
