//Dados iniciais
let currentQuestion = 0;
let correctAnswers = 0;
showQuestion();

//Evento Reset
document
  .querySelector(".scoreArea button")
  .addEventListener("click", resetEvent);

//Funções
function showQuestion() {
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];
    // Criar variável para a barra de progresso baseado na divisão entre número questão atual e quantidade de questões vezes 100. Use a função Math.floor para arredondar.
    let larguraBarra = Math.floor((currentQuestion / questions.length) * 100);

    // Defina a largura da .progress--bar com o valor obtido
    document.querySelector(".progress--bar").style.width = `${larguraBarra}%`;

    // Esconda a .scoreArea
    document.querySelector(".scoreArea").style.display = "none";

    // Exiba a .questionArea
    document.querySelector(".questionArea").style.display = "block";

    // Insira em .question o valor da questão
    document.querySelector(".question").innerHTML = q.question;

    // Defina .options como ""
    document.querySelector(".options").innerHTML = "";

    // Crie uma let optionsHtml para o texto das opções
    let optionsHtml = "";

    // Faça um laço em q.options e defina o valor da optionHtml com `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`
    for (let i = 0; i < q.options.length; i++) {
      optionsHtml += `<div data-op="${i}" class="option"><span>${
        parseInt(i) + 1
      }</span>${q.options[i]}</div>`;
    }
    console.log(optionsHtml);

    // Insira optionsHtml em .options
    document.querySelector(".options").innerHTML = optionsHtml;

    document.querySelectorAll(".options .option").forEach((item) => {
      item.addEventListener("click", optionClickEvent);
    });

  } else {
    // Chame a função finishQuiz
    finishQuiz()
  }
}

function optionClickEvent(event) {
  // Verifique qual questão foi clicada recuperando o atributo data-op. Use parseInt para formatar o atributo. Atribua o valor a uma variável.s
  let questaoClicada = parseInt(event.target.getAttribute('data-op'));

  if (questions[currentQuestion].answer === questaoClicada) {

     // Se a resposta clicada foi a correta, incremente a variável correctAnswers
    correctAnswers++
    alert("Certa resposta!")
  }

  if (questions[currentQuestion].answer !== questaoClicada) {
    alert("Resposta errada!")
  }

  // Incremente a variável currentQuestion
  currentQuestion++

  // Chame a função showQuestion
  showQuestion()
}

function finishQuiz() {
    // Criar variável de pontos baseado na divisão entre respostas corretas e quantidade de questões. Use a função Math.floor para arredondar.
    let pontosQuiz = Math.floor((correctAnswers / questions.length)*100);
    console.log(pontosQuiz)
    
    // Usar condicional if e condicionais <, <=, >, >=
    if (pontosQuiz <= 20) {
        // Inserir a pontuação em .scorePct e o texto em .scoreText2
        document.querySelector(".scorePct").innerHTML = `Acertou ${pontosQuiz}%`;
        document.querySelector(".scoreText2").innerHTML = `Péssimo! Você acertou apenas ${pontosQuiz}%! Refaça!`;

        // Implementar condicionais para inserir mensagem e cor do placar de acordo com a pontuação.
        document.querySelector(".scoreArea").style.backgroundColor = 'pink';

        // Ocultar a .questionArea e exibir a .scoreArea
        document.querySelector(".questionArea").style.display = 'none';
        document.querySelector(".scoreArea").style.display = 'block';

         // Deixar a .progress--bar em 100%
        document.querySelector(".progress--bar").style.width = '100%';
    }

    if (pontosQuiz > 20 && pontosQuiz <= 40) {
        document.querySelector(".scorePct").innerHTML = `Acertou ${pontosQuiz}%`;
        document.querySelector(".scoreText2").innerHTML = `Que pena! Você acertou apenas ${pontosQuiz}%!`
        document.querySelector(".scoreArea").style.backgroundColor = 'blue';
        document.querySelector(".questionArea").style.display = 'none';
        document.querySelector(".scoreArea").style.display = 'block';
        document.querySelector(".progress--bar").style.width = '100%';
    }

    if (pontosQuiz > 40 && pontosQuiz <= 60) {
        document.querySelector(".scorePct").innerHTML = `Acertou ${pontosQuiz}%`;
        document.querySelector(".scoreText2").innerHTML = `Parabéns! Você acertou ${pontosQuiz}%!`
        document.querySelector(".scoreArea").style.backgroundColor = 'green';
        document.querySelector(".questionArea").style.display = 'none';
        document.querySelector(".scoreArea").style.display = 'block';
        document.querySelector(".progress--bar").style.width = '100%';
    }

    if (pontosQuiz > 60 && pontosQuiz <= 80) {
        document.querySelector(".scorePct").innerHTML = `Acertou ${pontosQuiz}%`;
        document.querySelector(".scoreText2").innerHTML = `Meus parabéns! Você acertou ${pontosQuiz}%!`
        document.querySelector(".scoreArea").style.backgroundColor = 'yellow';
        document.querySelector(".questionArea").style.display = 'none';
        document.querySelector(".scoreArea").style.display = 'block';
        document.querySelector(".progress--bar").style.width = '100%';
    }

    if (pontosQuiz > 80) {
        document.querySelector(".scorePct").innerHTML = `Acertou ${pontosQuiz}%`;
        document.querySelector(".scoreText2").innerHTML = `Meus parabéns! Você acertou ${pontosQuiz}%! Muito bem!`;
        document.querySelector(".scoreArea").style.backgroundColor = 'blueviolet';
        document.querySelector(".questionArea").style.display = 'none';
        document.querySelector(".scoreArea").style.display = 'block';
        document.querySelector(".progress--bar").style.width = '100%';
    }
}

function resetEvent() {
    // Redefina os valores de correctAnswers e currentQuestion para 0
    correctAnswers = 0;
    currentQuestion = 0;

    // Chame a função showQuestion
    showQuestion()
}