const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const niveisExperiencia = [
  { limite: 10, nome: 'Ferro' },
  { limite: 20, nome: 'Bronze' },
  { limite: 50, nome: 'Prata' },
  { limite: 80, nome: 'Ouro' },
  { limite: 90, nome: 'Diamante' },
  { limite: 100, nome: 'Lendario' },
  { limite: Infinity, nome: 'Imortal' }
];

function determinarNivel(experiencia) {
  for (const nivel of niveisExperiencia) {
    if (experiencia <= nivel.limite) {
      return nivel.nome;
    }
  }
  return 'Nível Desconhecido';
}

rl.question('Digite a quantidade de vitórias do herói: ', vitoria => {
  rl.question('Digite a quantidade de derrotas do herói: ', derrota => {
    const experiencia = parseInt(vitoria) - parseInt(derrota);

    const nivelDoHeroi = determinarNivel(experiencia);
    console.log(`O Herói tem de saldo de ${experiencia} vitórias e está no nível de ${nivelDoHeroi}`);

    rl.close();
  });
});
