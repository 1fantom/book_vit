const quizQuestions = [
  { q: 'Сколько будет \\(\\frac12 + \\frac14\\)?',
    opts: ['\\(\\tfrac34\\)','\\(\\tfrac26\\)','1','\\(\\tfrac13\\)'], ans:'\\tfrac34' },
  { q: 'Результат \\(\\frac35 - \\frac15\\)?',
    opts: ['\\(\\tfrac25\\)','\\(\\tfrac15\\)','0','\\(\\tfrac{3}{10}\\)'], ans:'\\tfrac25' },
  { q: 'Сколько будет \\(\\frac23 \\times \\frac34\\)?',
    opts: ['\\(\\tfrac{6}{12}\\)','\\(\\tfrac12\\)','1','\\(\\tfrac35\\)'], ans:'\\tfrac12' },
  { q: 'Сколько будет \\(\\frac45 \\div \\frac25\\)?',
    opts: ['2','\\(\\tfrac12\\)','1','\\(\\tfrac54\\)'], ans:'2' },
  { q: 'Сколько будет \\(\\frac58 + \\frac38\\)?',
    opts: ['1','\\(\\tfrac78\\)','\\(\\tfrac{5}{16}\\)','\\(\\tfrac{8}{8}\\)'], ans:'1' },
  { q: 'Что такое числитель дроби?',
    opts:[
      'Число под чертой',
      'Число, показывающее на сколько частей поделено',
      'Число над чертой, показывающее количество частей',
      'Число, указывающее делитель'
    ], ans:'Число над чертой, показывающее количество частей'
  },
  { q: 'Что показывает знаменатель дроби?',
    opts:[
      'Сколько частей взяли',
      'Сколько всего частей в целом',
      'Количество целых',
      'Остаток от деления'
    ], ans:'Сколько всего частей в целом'
  },
  { q: 'Как называется дробь, у которой числитель больше знаменателя?',
    opts:['Обыкновенная дробь','Десятичная дробь','Смешанная дробь','Неправильная дробь'],
    ans:'Неправильная дробь'
  },
  { q: 'Какая дробь называется правильной?',
    opts:['Числитель больше знаменателя','Больше 1','Числитель меньше знаменателя','Не сокращается'],
    ans:'Числитель меньше знаменателя'
  },
  { q: 'Как перевести \\(1\\tfrac12\\) в неправильную дробь?',
    opts:['\\(\\tfrac32\\)','\\(\\tfrac21\\)','\\(\\tfrac23\\)','\\(\\tfrac52\\)'],
    ans:'\\tfrac32'
  }
];

const quizContainer = document.getElementById('quiz-questions');
const form = document.getElementById('quiz-form');
const resultBox = document.getElementById('quiz-result');

function renderQuiz() {
  quizQuestions.forEach((it, idx) => {
    const card = document.createElement('div');
    card.className = 'question-card fade-in';
    card.innerHTML = `
      <h3 class="question-title">Вопрос ${idx+1}</h3>
      <div class="question-text">${it.q}</div>
      <div class="answers">
        ${it.opts.map(opt=>`
          <label class="answer-option">
            <input type="radio" name="q${idx}" value="${opt.replace(/\\(|\\)/g,'')}" required>
            ${opt}
          </label>
        `).join('')}
      </div>`;
    quizContainer.appendChild(card);
  });
  // после вставки запускаем MathJax:
  if(window.MathJax) MathJax.typesetPromise();
  document.querySelectorAll('.fade-in').forEach(el=>el.classList.add('show'));
}

form.addEventListener('submit', e=>{
  e.preventDefault();
  let score=0;
  quizQuestions.forEach((it,i)=>{
    const sel = form.querySelector(`input[name="q${i}"]:checked`);
    if(sel && sel.value===it.ans) score++;
  });
  resultBox.innerHTML = `✨ Ваш результат: <strong>${score}</strong> из <strong>${quizQuestions.length}</strong>.`;
});

window.addEventListener('DOMContentLoaded', renderQuiz);
