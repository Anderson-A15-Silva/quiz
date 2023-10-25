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
    finishQuiz()
  }
}

function optionClickEvent(e) {
    console.log(e)
  // Verifique qual questão foi clicada recuperando o atributo data-op. Use parseInt para formatar o atributo. Atribua o valor a uma variável.s
  let questaoClicada = parseInt(e.target.getAttribute('data-op'));

  // Se a resposta clicada foi a correta, incremente a variável correctAnswers
  if (question[currentQuestion].answer === questaoClicada) {
    
    // Incremente a variável currentQuestion
    currentQuestion++
  }

  // Chame a função showQuestion
  showQuestion()
}

function finishQuiz() {
    let questionFinish = document.querySelector(".questionArea")

    // Criar variável de pontos baseado na divisão entre respostas corretas e quantidade de questões. Use a função Math.floor para arredondar.
    let pontosQuiz = Math.floor(correctAnswers / 10);

    // Inserir a pontuação em .scorePct e o texto em .scoreText2
    let pontosFinish = document.getElementsByClassName(".scorePct");
    pontosFinish.innerHTML = `${pontosFinish}`;
    let textoFinish = document.getElementsByClassName(".scoreText2");
    textoFinish.innerHTML = `${textoFinish}`;

    if (pontosQuiz < 20) {
        textoFinish.innerHTML = "Parabéns! Você acertou 20%! Refaça!"
        // Implementar condicionais para inserir mensagem e cor do placar de acordo com a pontuação.
        document.querySelector(".areaScore").style.backgroundColor = 'pink';
        document.querySelector(".questionArea").style.display = 'none'
        document.querySelector(".scoreArea").style.display = 'block'
        document.querySelector(".progress--bar").style.width = '100%'
    }

    // Usar condicional if e condicionais <, <=, >, >=
    if (pontosQuiz < 40) {
        textoFinish.innerHTML = `Parabéns! Você acertou apenas ${pontosQuiz}%!`
        document.querySelector(".areaScore").style.backgroundColor = 'blue';
        document.querySelector(".questionArea").style.display = 'none'
        document.querySelector(".scoreArea").style.display = 'block'
        document.querySelector(".progress--bar").style.width = '100%'
    }

    if (pontosQuiz < 60) {
        textoFinish.innerHTML = `Parabéns! Você acertou ${pontosQuiz}%!`
        document.querySelector(".areaScore").style.backgroundColor = 'green';
        // Ocultar a .questionArea e exibir a .scoreArea
        document.querySelector(".questionArea").style.display = 'none'
        document.querySelector(".scoreArea").style.display = 'block'
        document.querySelector(".progress--bar").style.width = '100%'
    }

    if (pontosQuiz < 80) {
        textoFinish.innerHTML = `Meus parabéns! Você acertou ${pontosQuiz}%!`
        document.querySelector(".areaScore").style.backgroundColor = 'yellow';
        document.querySelector(".questionArea").style.display = 'none'
        document.querySelector(".scoreArea").style.display = 'block'
        // Deixar a .progress--bar em 100%
        document.querySelector(".progress--bar").style.width = '100%'
    }

    if (pontosQuiz >= 80) {
        textoFinish.innerHTML = `Meus parabéns! Você acertou ${pontosQuiz}%! Muito bem!`;
        document.querySelector(".areaScore").style.backgroundColor = 'red';
        document.querySelector(".questionArea").style.display = 'none'
        document.querySelector(".scoreArea").style.display = 'block'
        document.querySelector(".progress--bar").style.width = '100%'
    }
}

function resetEvent() {
    // Redefina os valores de correctAnswers e currentQuestion para 0
    correctAnswers = 0;
    currentQuestion = 0;
    showQuestion()
    // Chame a função showQuestion
    showQuestion()
}