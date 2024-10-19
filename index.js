const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;
    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }
    console.log(`O Herói tem um saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`);
}
function iniciarCalculadora() {
    rl.question("Digite o número de vitórias: ", (vitoriasInput) => {
        rl.question("Digite o número de derrotas: ", (derrotasInput) => {
            let vitorias = parseInt(vitoriasInput);
            let derrotas = parseInt(derrotasInput);
            calcularRank(vitorias, derrotas);
            rl.question("Deseja calcular novamente? (s/n): ", (resposta) => {
                if (resposta.toLowerCase() === 's') {
                    iniciarCalculadora();
                } else {
                    console.log("Calculadora encerrada.");
                    rl.close();
                }
            });
        });
    });
}
iniciarCalculadora();
