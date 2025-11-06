// DECLARE VARIABLES

let theQuestion = document.querySelector("h1");

let scorer = document.querySelector("p");

let option = [
  document.querySelector("#option1"),
  document.querySelector("#option2"),
  document.querySelector("#option3"),
  document.querySelector("#option4"),
];

let submitButton = document.querySelector("#submitAnswer");

// CLASS FOR QUIZCARDS

class quizCard {
  constructor(
    question,
    firstOption,
    secondOption,
    thirdOption,
    fourthOption,
    correctAnswer
  ) {
    this.question = question;
    this.firstOption = firstOption;
    this.secondOption = secondOption;
    this.thirdOption = thirdOption;
    this.fourthOption = fourthOption;
    this.correctAnswer = correctAnswer;
  }
}

// OBJECT INSTANCES

let obj = [
  new quizCard(
    "Where is the Eiffel Tower?",
    "Italy",
    "France",
    "Spain",
    "Germany",
    "France"
  ),
  new quizCard(
    "Which of these countries belong the do not reside in Europe?",
    "Cameroon",
    "Hungary",
    "Latvia",
    "United Kingdom",
    "Cameroon"
  ),
  new quizCard(
    "What is the largest desert in the world?",
    "Gobi Desert",
    "Kalahari Desert",
    "Sahara Desert",
    "Arabian Desert",
    "Sahara Desert"
  ),
  new quizCard(
    "Which river is the longest in the world?",
    "Amazon River",
    "Nile River",
    "Yangtze River",
    "Mississippi River",
    "Nile River"
  ),
  new quizCard(
    "Mount Everest lies on the border between which two countries?",
    "China and India",
    "Nepal and China",
    "India and Bhutan",
    "Nepal and India",
    "Nepal and China"
  ),
  new quizCard(
    "Which country has the most natural lakes?",
    "Canada",
    "Russia",
    "Brazil",
    "United States",
    "Canada"
  ),
  new quizCard(
    "What is the smallest country in the world?",
    "Monaco",
    "San Marino",
    "Vatican City",
    "Liechtenstein",
    "Vatican City"
  ),
  new quizCard(
    "Which continent has the highest population?",
    "Africa",
    "Europe",
    "Asia",
    "North America",
    "Asia"
  ),
  new quizCard(
    "What ocean lies on the east coast of the United States?",
    "Pacific Ocean",
    "Atlantic Ocean",
    "Indian Ocean",
    "Arctic Ocean",
    "Atlantic Ocean"
  ),
  new quizCard("How many continents are on Earth", 
    "5", 
    "6", 
    "7", 
    "8", 
    "7"
  ),
];

function clickA() {
  answer = obj[i].firstOption;
}

function clickB() {
  answer = obj[i].secondOption;
}

function clickC() {
  answer = obj[i].thirdOption;
}

function clickD() {
  answer = obj[i].fourthOption;
}

// DISPLAY ON QUIZCARD AND SHUFFLE THROUGH QUESTIONS
let i = 0;
let count = 0;

function changeQuestion() {
  if (obj[i].correctAnswer === answer) {
    count++;
    scorer.textContent = count;
  }
  if (i < obj.length - 1) {
    i++;
    displayOutput();
  }
  else{
    scorer.textContent = `${count}/10`;
    submitButton.disabled = true;
  }
}

function displayOutput() {
  theQuestion.innerHTML = obj[i].question;
  option[0].innerHTML = obj[i].firstOption;
  option[1].innerHTML = obj[i].secondOption;
  option[2].innerHTML = obj[i].thirdOption;
  option[3].innerHTML = obj[i].fourthOption;
}

displayOutput();

option[0].addEventListener("click", clickA);
option[1].addEventListener("click", clickB);
option[2].addEventListener("click", clickC);
option[3].addEventListener("click", clickD);

submitButton.addEventListener("click", changeQuestion);
