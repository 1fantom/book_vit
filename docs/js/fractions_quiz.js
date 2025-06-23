// Функция для красивого отображения дробей
function fractionHTML(num, den) {
  return `<span class="fraction"><span class="num">${num}</span><span class="den">${den}</span></span>`;
}

// Список возможных операций
const operations = ['+', '−', '×', '÷'];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
  const a = getRandomInt(1, 9);
  const b = getRandomInt(2, 10);
  const c = getRandomInt(1, 9);
  const d = getRandomInt(2, 10);
  const op = operations[getRandomInt(0, operations.length - 1)];
  const example = `${fractionHTML(a, b)} <span class="operator">${op}</span> ${fractionHTML(c, d)}`;
  return {
    text: `Вычислите: ${example}`
  };
}

// Подождём, пока DOM загрузится
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  for (let i = 1; i <= 5; i++) {
    const q = generateQuestion();
    const div = document.createElement('div');
    div.className = 'quiz-question';
    div.innerHTML = `
      <h3>Вопрос ${i}</h3>
      <div class="question-text">${q.text}</div>
      <div class="answer-block">
        <input type="text" placeholder="Введите ответ" />
        <button>Проверить</button>
      </div>
    `;
    container.appendChild(div);
  }
});
