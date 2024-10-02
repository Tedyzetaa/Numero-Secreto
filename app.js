alert('Boas Vindas ao jogo do número secreto');
let numeroMaximo;
numeroMaximo = prompt('Escolha um número maximo');
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); 
console.log(numeroSecreto);
let chute;
let tentativas = 1;


// enquanto chute não for igual ao numeroSecreto

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //se o chute for igual ao número secreto
    if (numeroSecreto == chute) {
            break;
    } else {
        if (numeroSecreto > chute){
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

// if (tentativas > 1){
//     alert(`Boa, Tu descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);    
// } else {
//         alert(`Boa, Tu descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Boa, Tu descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

