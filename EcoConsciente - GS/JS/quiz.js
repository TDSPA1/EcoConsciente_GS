const questions = [
  {
      question: "Qual das alternativas abaixo é uma fonte de energia renovável?",
      options: ["Carvão", "Solar", "Petróleo", "Nuclear"],
      correctAnswer: "Solar"
  },
  {
      question: "A energia eólica é gerada através de qual recurso natural?",
      options: ["Água", "Vento", "Luz Solar", "Biomassa"],
      correctAnswer: "Vento"
  },
  {
      question: "Qual é a principal vantagem da energia solar?",
      options: ["Baixo custo de instalação", "Emissões de gases de efeito estufa", "Fonte inesgotável e limpa", "Alta eficiência energética"],
      correctAnswer: "Fonte inesgotável e limpa"
  },
  {
     question: "Qual das alternativas é um benefício da energia eólica?",
     options: ["Causa grande impacto ambiental","Não depende de condições climáticas para gerar eletricidade","É uma fonte limpa e renovável de energia","É uma energia não renovável"],
     correctAnswer: "É uma fonte limpa e renovável de energia"
  },
  { 
    question: "O que é a biomassa ?",
    options: ["Energia gerada a partir da fissão nuclear","Energia gerada por processos geotérmicos","Energia derivada de matéria orgânica","Energia gerada a partir da queima de resíduos sólidos urbanos"],
    correctAnswer: "Energia derivada de matéria orgânica"
  },

  {
      question: "Qual dessas fontes de energia renovável depende do uso de biomassa?",
      options: ["Solar", "Eólica", "Hidrelétrica", "Biomassa"],
      correctAnswer: "Biomassa"
  },
  {
      question: "Qual país é o maior produtor de energia eólica do mundo?",
      options: ["China", "Brasil", "Alemanha", "Estados Unidos"],
      correctAnswer: "China"
  },
 {
    question: "O que são energias renováveis?",
    options: ["Energia renovável são aquelas que se renovam naturalmente","Energia renovável são aquelas que são  produzidas pelo homem","São energia gerada por fontes esgotáveis","São energias consideradas poluentes"],
    correctAnswer: "Energia renovável são aquelas que se renovam naturalmente"
    },
   {
    question: "O que são energias não renováveis?",
    options: ["São energias encontradas na natureza e se renovam naturalmente","São energia proveniente de fontes com recurso finito","Causa pouco impacto para a natureza","A superexploração das fontes faz com que os recursos não se esgotem rapidamente"],
    correctAnswer: "São energia proveniente de fontes com recurso finito"
   },

   {
    question:"O que é o processo de fissão nuclear ?",
    options: ["Combustão de matéria orgânica para gerar eletricidade","Quebra de átomos para liberar grandes quantidades de energia","Processamento de resíduos de carvão","Transformação de calor solar em eletricidade"],
    correctAnswer: "Quebra de átomos para liberar grandes quantidades de energia"
   }
    ];

let currentQuestionIndex = 0;
let score = 0;

// Função para exibir a próxima pergunta
function loadQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").textContent = question.question;
  const optionsList = document.getElementById("options");
  optionsList.innerHTML = ''; // Limpar opções anteriores
  question.options.forEach(option => {
      const li = document.createElement("li");
      li.classList.add("option");
      li.textContent = option;
      li.addEventListener("click", checkAnswer);
      optionsList.appendChild(li);
  });
  document.getElementById("score").textContent = score;
  document.getElementById("total-questions").textContent = questions.length;
  document.getElementById("result-container").style.display = "none";
  document.getElementById("question-container").style.display = "block";
}

// Função para verificar a resposta do usuário
function checkAnswer(event) {
  const selectedOption = event.target.textContent;
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  const resultMessage = document.getElementById("result-message");

  if (selectedOption === correctAnswer) {
      score++;
      resultMessage.textContent = "Correto! Você acertou.";
      resultMessage.style.color = "green";
  } else {
      resultMessage.textContent = "Errado! Tente novamente.";
      resultMessage.style.color = "red";
  }

  // Exibir o resultado
  document.getElementById("score").textContent = score;
  document.getElementById("question-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";
}

// Função para avançar para a próxima pergunta
document.getElementById("next-button").addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      loadQuestion();
  } else {
      document.getElementById("result-message").textContent = `Você completou o quiz! Sua pontuação final é: ${score} de ${questions.length}.`;
      document.getElementById("next-button").textContent = "Reiniciar Quiz";
      document.getElementById("next-button").addEventListener("click", () => {
          score = 0;
          currentQuestionIndex = 0;
          loadQuestion();
      });
  }
});

// Inicializar o quiz
loadQuestion();
