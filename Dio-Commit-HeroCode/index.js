const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const niveisExperiencia = [
    { limite: 1000, nome: "Ferro" },
    { limite: 2000, nome: "Bronze" },
    { limite: 5000, nome: "Prata" },
    { limite: 7000, nome: "Ouro" },
    { limite: 8000, nome: "Platina" },
    { limite: 9000, nome: "Ascendente" },
    { limite: 10000, nome: "Imortal" },
    { limite: Infinity, nome: "Radiante" } 
];

function determinarNivel(experiencia) {
    for (const nivel of niveisExperiencia) {
        if (experiencia <= nivel.limite) {
            return nivel.nome;
        }
    }
    return "Nível Desconhecido";
}

rl.question("Digite o nome do Herói: ", (nome) => {
    rl.question("Informe a experiência do Herói: ", (experienciaInput) => {
        const experiencia = parseInt(experienciaInput);

        if (isNaN(experiencia)) {
            console.log("Experiência inválida. Por favor, digite um número.");
        } else {
            const nivelDoHeroi = determinarNivel(experiencia);
            console.log(`O Herói de nome ${nome} está no nível de ${nivelDoHeroi}`);
        }
        rl.close();
    });
});


