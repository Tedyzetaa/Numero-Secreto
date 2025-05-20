const startBtn = document.querySelector('.game__start-btn');
const modal    = document.getElementById('modal-jogo');
const inputMax = document.getElementById('input-max');
const resultCard = document.getElementById('result-card');

let secret, attempts;

startBtn.addEventListener('click', () => {
  modal.showModal();
  inputMax.value = '';
  resultCard.style.display = 'none';
  inputMax.focus();
});

modal.addEventListener('close', () => {
  if (modal.returnValue === 'cancel') return;
  const maxNum = parseInt(inputMax.value);
  if (!maxNum || maxNum < 1) {
    alert('Insira um valor válido.');
    return;
  }
  secret = Math.floor(Math.random() * maxNum) + 1;
  attempts = 0;
  play(secret, maxNum);
});

function play(secret, max) {
  const loop = () => {
    const answer = prompt(`Digite um número entre 1 e ${max}`);
    if (answer === null) return;
    attempts++;
    const guess = Number(answer);
    if (guess === secret) {
      return showResult(true);
    }
    alert(guess < secret ? 'O número é maior!' : 'O número é menor!');
    loop();
  };
  loop();
}

function showResult(win) {
  resultCard.innerHTML = `
    <h3>${win ? 'Parabéns!' : 'Fim de jogo'}</h3>
    <p>Você ${win ? 'acertou' : 'não acertou'} o número <strong>${secret}</strong> em ${attempts} tentativa${attempts>1?'s':''}.</p>
  `;
  resultCard.style.display = 'block';
  startBtn.textContent = 'Jogar Novamente';
}
