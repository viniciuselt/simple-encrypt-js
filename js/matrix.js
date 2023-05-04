const matrixText = document.querySelector('#matrix-text');
let word = matrixText.textContent.trim();
const characters = 'に0ほ1愛0詞1冠0定1不0愛1私0行1';
const duration = 3000; // duração da animação em milissegundos
const interval = 70; // intervalo de tempo entre cada letra em milissegundos
const randomizeInterval = 40; // intervalo de tempo entre cada letra aleatória em milissegundos

function randomCharacter() {
  return characters.charAt(Math.floor(Math.random() * characters.length));
}

function matrixEffect() {
  let matrixWord = '';
  for (let i = 0; i < word.length; i++) {
    matrixWord += `<span class="matrix-letter">${randomCharacter()}</span>`;
  }
  matrixText.innerHTML = matrixWord;

  let matrixLetters = document.querySelectorAll('.matrix-letter');
  let wordLetters = word.split('');
  let position = 0;

  function updateLetter(index) {
    matrixLetters[index].textContent = wordLetters[index];
    matrixLetters[index].classList.remove('matrix-letter-random');
    matrixLetters[index].classList.add('matrix-letter-animate');
    position++;
    if (position >= matrixLetters.length) {
      return;
    }
    setTimeout(function() {
      matrixLetters[position].classList.add('matrix-letter-random');
      updateLetter(position);
    }, randomizeInterval);
  }

  setTimeout(function() {
    updateLetter(position);
  }, duration - (interval * wordLetters.length));

}

matrixEffect();