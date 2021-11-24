const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    id: 1,
    question: "Which is your favorite series",
    //answer: "What does {user} put in WhatsApp status often?",
    hide: 0,
    featured: 1,
    images: [
      {
        name: "Money heist",
        url: "c.jpg",
      },
      {
        name: "Family man",
        url: "d.jpg",
      },
      {
        name: "The office",
        url: "b.jpg",
      },
      {
        name: "Stranger things",
        url: "a.jpg",
      },
    ],
  },
  {
    id: 2,
    question: "Do have rings in hands?",
    answer: "Does {user} have rings in hands?",
    hide: 0,
    featured: 1,
    images: [
      {
        name: "Yes",
        url: "47413f6829db78fe4f4be2175808cf2e.png",
      },
      {
        name: "No",
        url: "000c7e7ce074562f22d08011b735a261.png",
      },
    ],
  },
  {
    id: 3,
    question: "What Would You Choose?",
    answer: "What would {user} choose?",
    hide: 0,
    featured: 0,
    images: [
      {
        name: "Rose",
        url: "83b315ffa0af22df5310682211785de3.jpg",
      },
      {
        name: "Jasmine",
        url: "cde015a2ef4bb7edf147c87829367c12.jpg",
      },
      {
        name: "Sun Flower",
        url: "ea09423bb55056d2f2586e9fd2958052.jpg",
      },
      {
        name: "Lily",
        url: "7d591af5ca95294a207f20eb7ec4c34e.jpg",
      },
      {
        name: "Iris",
        url: "5a06a1ad564120c687fea7134b307451.jpg",
      },
      {
        name: "Marigold",
        url: "fa3fc49a6c1aa628b097871442550c07.jpg",
      },
      {
        name: "Lotus",
        url: "adf338bcf18c5fb22421d58ed055f05c.jpg",
      },
      {
        name: "Daisy",
        url: "1d5a3f8418d39083862dcaf862a2f25a.jpg",
      },
    ],
  },
  {
    id: 4,
    question: "Which Super Hero Do You Like?",
    answer: "Which Super Hero Does {user} Like?",
    hide: 0,
    featured: 0,
    images: [
      {
        name: "Captain America",
        url: "2b11182d186167a123cbd6097912d9ed.jpg",
      },
      {
        name: "Spiderman",
        url: "7a9c83d0554af8eed1772d981bd251cb.jpg",
      },
      {
        name: "Superman",
        url: "cb0b15dc7d739b4c259f56bdb5e7fc66.jpg",
      },
      {
        name: "Deadpool",
        url: "90cca53c417f883e6feed2df9f81cf32.jpg",
      },
      {
        name: "Iron Man",
        url: "8d6686daea6544915817798d315684ab.png",
      },
      {
        name: "Hulk",
        url: "25098a055530289a857b310d7b32b675.png",
      },
      {
        name: "Thor",
        url: "420c2f93dadf5fd76bfcbe860af71df2.png",
      },
      {
        name: "Ant Man",
        url: "da674ef7be18c0bc121b5362c14bcaa8.jpg",
      },
    ],
  },
  {
    id: 5,
    question: "How you like to travel in your day to day life?",
    answer: "How {user} like to travel in your day to day life?",
    hide: 0,
    featured: 0,
    images: [
      {
        name: "Cycle",
        url: "ff28f5da5fd01b332b5fc446460e70d1.jpg",
      },
      {
        name: "Car",
        url: "468536156dd4a213c9827a8ae6da390a.jpg",
      },
      {
        name: "Bike",
        url: "36c0199b3189dd0eeb64e18b16e07df6.jpg",
      },
      {
        name: "Bus",
        url: "6ce2c49439106e9fe90767646a7a4bea.jpg",
      },
      {
        name: "Plane",
        url: "936752b96d491f16d8ecab77107652b0.jpg",
      },
      {
        name: "Train",
        url: "1d71f1c43fb11680129e1b2d6a894901.jpg",
      },
    ],
  },
  {
    id: 6,
    question: "What exercise do you like?",
    answer: "What exercise does {user} like?",
    hide: 0,
    featured: 0,
    images: [
      {
        name: "Dance",
        url: "e99de7e2835c73acfe74a1b945c3b407.jpg",
      },
      {
        name: "Yoga",
        url: "5a5b47790f9aa0912cc56e845d7213ad.jpg",
      },
      {
        name: "Gym",
        url: "9ed51e5b7f34fb682642e80c6db4f4bb.jpg",
      },
      {
        name: "Running",
        url: "a324890828e67a47cef902025ab54e26.jpg",
      },
      {
        name: "Swimming",
        url: "cbb8ef98d6004d835e9310bfedd2ba16.jpg",
      },
    ],
  },
  {
    id: 7,
    question: "Do you wear Glasses?",
    answer: "Does {user} wear Glasses?",
    hide: 0,
    featured: 1,
    images: [
      {
        name: "Yes",
        url: "8a9af719f8380c3e1d123f79b11ee254.png",
      },
      {
        name: "No",
        url: "53aaa4afbf61577af6ccadc7b9ccace9.png",
      },
    ],
  },
  {
    id: 8,
    question: "What is your favorite drink?",
    answer: "What is {user} favorite drink?",
    hide: 0,
    featured: 0,
    images: [
      {
        name: "Tea",
        url: "fe9bc30671e558969b5e3ee84dc83424.jpg",
      },
      {
        name: "Coffee",
        url: "673d848dd60f135d4858d10416d45d4c.jpg",
      },
      {
        name: "Juice",
        url: "5dc84dc3f12471372c3a14d9a2fe4f12.jpg",
      },
      {
        name: "Milk",
        url: "cc2dd939407ce6c96f144a45a521cf70.jpg",
      },
      {
        name: "Alcohol",
        url: "613c8209c65f6a455caf5bcc331ae8f2.jpg",
      },
      {
        name: "Water",
        url: "36710c274dcfdbe725116fd56102a30f.jpg",
      },
    ],
  },
  {
    id: 9,
    question: "Do you like beer or vodka?",
    answer: "Does {user} like beer or vodka?",
    hide: 0,
    featured: 0,
    images: [
      {
        name: "Beer",
        url: "fec95f40d6097f2f8fea7b495d625b38.jpg",
      },
      {
        name: "Vodka",
        url: "ceeb8143c3f2e4dd673a38705f48fffb.jpg",
      },
    ],
  },
  {
    id: 10,
    question: "What are you good at?",
    answer: "What are {user} good at?",
    hide: 0,
    featured: 0,
    images: [
      {
        name: "Swimming",
        url: "263602dc058bf029e91b23f8d6f5e892.jpg",
      },
      {
        name: "Cycling",
        url: "4c668c3ffda8b1c15aeb9269bcbfcd24.jpg",
      },
    ],
  },
];
