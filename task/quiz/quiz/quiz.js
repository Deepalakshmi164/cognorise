const quizData = {
    science: [
      {
        question: "What is the powerhouse of the cell?",
        options: ["Mitochondrion", "Nucleus", "Chloroplast", "Endoplasmic reticulum"],
        answer: "Mitochondrion"
      },
      {
        question: "What is the atomic number of carbon?",
        options: ["5", "10", "12", "6"],
        answer: "6"
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
      }
    ],
    history: [
      {
        question: "Who was the first President of the United States?",
        options: ["George Washington", "Thomas Jefferson", "John Adams", "Abraham Lincoln"],
        answer: "George Washington"
      },
      {
        question: "In which year did World War II end?",
        options: ["1943", "1945", "1950", "1939"],
        answer: "1945"
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci"
      }
    ],
    geography: [
      {
        question: "Which ocean is the largest?",
        options: ["Pacific Ocean", "Indian Ocean", "Atlantic Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "India", "Japan", "South Korea"],
        answer: "Japan"
      },
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        answer: "Canberra"
      }
    ]
  };
  
  const categories = document.querySelectorAll('.category');
  const quizContainer = document.getElementById('quiz');
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const scoreElement = document.getElementById('score');
  const quizForm = document.getElementById('quiz-form');
  const restartButton = document.getElementById('restart');
  
  let currentCategory = null;
  let currentQuestionIndex = 0;
  let score = 0;
  
  categories.forEach(category => {
    category.addEventListener('click', () => {
      currentCategory = category.dataset.category;
      startQuiz();
    });
  });
  
  quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      checkAnswer(answer);
    }
  });
  
  restartButton.addEventListener('click', () => {
    quizContainer.style.display = 'none';
    document.getElementById('categories').style.display = 'flex';
    scoreElement.style.display = 'none';
    currentCategory = null;
    currentQuestionIndex = 0;
    score = 0;
  });
  
  function startQuiz() {
    quizContainer.style.display = 'block';
    document.getElementById('categories').style.display = 'none';
    scoreElement.style.display = 'none';
    showNextQuestion();
  }
  
  function showNextQuestion() {
    const quizCategory = quizData[currentCategory];
    if (currentQuestionIndex < quizCategory.length) {
      const question = quizCategory[currentQuestionIndex];
      questionElement.textContent = question.question;
      optionsElement.innerHTML = '';
      question.options.forEach((option, index) => {
        const optionLabel = document.createElement('label');
        optionLabel.innerHTML = `<input type="radio" name="option" value="${option}"> ${option}`;
        optionsElement.appendChild(optionLabel);
      });
    } else {
      showResult();
    }
  }
  
  function checkAnswer(answer) {
    const quizCategory = quizData[currentCategory];
    const currentQuestion = quizCategory[currentQuestionIndex];
    if (answer === currentQuestion.answer) {
      score++;
    }
    currentQuestionIndex++;
    showNextQuestion();
  }
  
  function showResult() {
    quizContainer.style.display = 'none';
    scoreElement.textContent = `Your score: ${score} / ${quizData[currentCategory].length}`;
    scoreElement.style.display = 'block';
  }
  