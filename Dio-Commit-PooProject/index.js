
tipoAtaque = {
    "mago": "Magia",
    "guerreiro": "Espada",
    "monge": "Artes marciais",
    "ninja": "Shuriken"
}

class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = tipoAtaque[this.tipo]
    }

    apresentar(){
        console.log(`O tipo ${this.tipo} atacou usando ${this.ataque}`)
    }
}

const mago = new Heroi("Joao", 10, "mago");
const guerreiro = new Heroi("Joao", 10, "guerreiro");
const monge = new Heroi("Joao", 10, "monge");
const ninja = new Heroi("Joao", 10, "ninja");

mago.apresentar(); 
guerreiro.apresentar();
monge.apresentar();
ninja.apresentar();