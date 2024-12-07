const questions = [
  {
    id: 1,
    question: " Welches Tier ist das schnellste der Welt?",
    antworte: [
      {
        id: "a",
        text: "Känguru",
        correct: false,
      },
      {
        id: "b",
        text: "Gepard",
        correct: true,
      },
      {
        id: "c",
        text: "Windhund",
        correct: false,
      },
      {
        id: "d",
        text: "Feldhase",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Wie viele Tasten hat ein Klavier?",
    antworte: [
      {
        id: "a",
        text: "88 Tasten, 36 schwarze und 52 weiße ",
        correct: true,
      },
      {
        id: "b",
        text: "80 Tasten, 42 schwarze und 38 weiße",
        correct: false,
      },
      {
        id: "c",
        text: "76 Tasten, 36 schwarze und 40 weiße",
        correct: false,
      },
      {
        id: "d",
        text: "60 Tasten, 30 schwarze und 30 weiße",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Wie heißt der weltweit längste Fluss?",
    antworte: [
      {
        id: "a",
        text: "Elbe in Deutschland ",
        correct: false,
      },
      {
        id: "b",
        text: "Aldan in Asien",
        correct: false,
      },
      {
        id: "c",
        text: "Nil in Ägypten ",
        correct: true,
      },
      {
        id: "d",
        text: "Amazonas Südamerika",
        correct: false,
      },
    ],
  },
  {
    id: 1,
    question: "  In welchem Jahr fiel die Berliner Mauer?",
    antworte: [
      {
        id: "a",
        text: " am 15 Oktober 1988",
        correct: false,
      },
      {
        id: "b",
        text: "am 9 November 1989",
        correct: true,
      },
      {
        id: "c",
        text: "am 22 April 1898",
        correct: false,
      },
      {
        id: "d",
        text: "am 2 September 1991",
        correct: false,
      },
    ],
  },
];
let currentQuestion;
let currentQuestionPointer = -1;

function renderQuestion(question) {
  const quizBox = document.createElement("div");
  quizBox.id = question.id;
  quizBox.classList.add("quiz-box");

  const quizTitle = document.createElement("div");
  quizTitle.classList.add("quiz-title");
  quizTitle.appendChild(document.createTextNode(question.question));

  const quizButton = document.createElement("div");
  quizButton.classList.add("quiz-button");

  const antwortCopy = [];
  question.antworte.forEach((antwort) => {
    antwortCopy.push(antwort);
  });
  while (antwortCopy.length > 0) {
    const randomPointer = Math.floor(Math.random() * antwortCopy.length);

    const antwort = antwortCopy.splice(randomPointer, 1)[0];
    const antwotButton = document.createElement("button");
    antwotButton.id = antwort.id;
    antwotButton.setAttribute("onclick", `validate('${antwort.id}')`);
    antwotButton.classList.add("answer");
    antwotButton.appendChild(document.createTextNode(antwort.text));

    quizButton.appendChild(antwotButton);
  }

  quizBox.appendChild(quizTitle);
  quizBox.appendChild(quizButton);

  document.getElementById("question").appendChild(quizBox);
}
function nextQuestion() {
  if (currentQuestion) {
    document.getElementById(String(currentQuestion.id)).remove();
  }

  if (currentQuestionPointer + 1 < questions.length) {
    currentQuestionPointer++;
    currentQuestion = questions[currentQuestionPointer];
  } else {
    currentQuestionPointer = 0;
    currentQuestion = questions[currentQuestionPointer];
  }

  renderQuestion(currentQuestion);
}
function validate(antwortId) {
  const correctAntwort = currentQuestion.antworte.find((antwort) => {
    return antwort.correct;
  });

  if (correctAntwort.id === antwortId) {
    alert("Richtig");
    document.getElementById(antwortId).classList.add("correct");
  } else {
    alert("Falsch");
    document.getElementById(antwortId).classList.add("incorrect");
    document.getElementById(correctAntwort.id).classList.add("correct");
  }
}
function schowSolution() {
  const correctAntwort = currentQuestion.antworte.find((antwort) => {
    return antwort.correct;
  });
  document.getElementById(correctAntwort.id).classList.add("correct");
}
