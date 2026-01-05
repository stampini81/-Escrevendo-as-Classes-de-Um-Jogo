class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
        break;
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso (pode ajustar livremente)
const herois = [
  new Heroi("Leandro", 30, "mago"),
  new Heroi("Leandro", 30, "guerreiro"),
  new Heroi("Leandro", 30, "monge"),
  new Heroi("Leandro", 30, "ninja"),
];

for (const heroi of herois) {
  heroi.atacar();
}
