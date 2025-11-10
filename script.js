// DECLARE VARIABLES

let theQuestion = document.querySelector("h1");
let scorer = document.querySelector("p");

let option = [
  document.querySelector("#option1"),
  document.querySelector("#option2"),
  document.querySelector("#option3"),
  document.querySelector("#option4"),
];

let selector = [
  document.querySelector("#geography-btn"),
  document.querySelector("#science-btn"),
  document.querySelector("#history-btn"),
];

let submitButton = document.querySelector("#submitAnswer");

let resetButton1 = document.querySelector("#resetButton1");
let resetButton2 = document.querySelector("#resetButton2");

let optionSection = document.querySelector("#options");
let quizUISection = document.querySelector("#quizUI");
let scoreCard = document.querySelector("#scoreCard");

let correctAnswers =[];
let incorrectAnswers =[];
let timerInterval;

const progressBar = document.querySelector('.progress-bar');
const livePoints = document.querySelector('.live-points');



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
  [
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
    new quizCard("How many continents are on Earth", "5", "6", "7", "8", "7"),
  ],

  //Science Quiz Card
  [
    new quizCard(
      "What planet is known as the Red Planet?",
      "Venus",
      "Mars",
      "Jupiter",
      "Saturn",
      "Mars"
    ),
    new quizCard(
      "What is the chemical symbol for water?",
      "H2O",
      "O2",
      "CO2",
      "NaCl",
      "H2O"
    ),
    new quizCard(
      "What gas do humans exhale when they breathe out?",
      "Oxygen",
      "Carbon Dioxide",
      "Nitrogen",
      "Helium",
      "Carbon Dioxide"
    ),
    new quizCard(
      "What gas do plants absorb from the atmosphere?",
      "Oxygen",
      "Carbon Dioxide",
      "Nitrogen",
      "Hydrogen",
      "Carbon Dioxide"
    ),
    new quizCard(
      "How many moons does Earth have?",
      "1",
      "2",
      "3",
      "4",
      "1"
    ),
    new quizCard(
      "What part of the cell contains genetic material?",
      "Nucleus",
      "Cytoplasm",
      "Cell membrane",
      "Ribosome",
      "Nucleus"
    ),
    new quizCard(
      "What force keeps planets in orbit around the sun?",
      "Magnetism",
      "Electricity",
      "Gravity",
      "Friction",
      "Gravity"
    ),
    new quizCard(
      "Which organ in the human body pumps blood?",
      "Liver",
      "Heart",
      "Lungs",
      "Kidneys",
      "Heart"
    ),
    new quizCard(
      "Which planet has the most moons?",
      "Mars",
      "Jupiter",
      "Saturn",
      "Neptune",
      "Saturn"
    ),
    new quizCard(
      "What is the boiling point of water at sea level?",
      "50°C",
      "100°C",
      "150°C",
      "200°C",
      "100°C"
    ),
  ],

  //History Quiz Card
  [
    new quizCard(
      "Who was the first President of the United States?",
      "Abraham Lincoln",
      "George Washington",
      "Thomas Jefferson",
      "John Adams",
      "George Washington"
    ),
    new quizCard(
      "In which year did World War II end?",
      "1940",
      "1945",
      "1950",
      "1939",
      "1945"
    ),
    new quizCard(
      "Who discovered America in 1492?",
      "Marco Polo",
      "Christopher Columbus",
      "Ferdinand Magellan",
      "Vasco da Gama",
      "Christopher Columbus"
    ),
    new quizCard(
      "Which ancient civilization built the pyramids?",
      "Romans",
      "Greeks",
      "Egyptians",
      "Mayans",
      "Egyptians"
    ),
    new quizCard(
      "What was the name of the ship that sank in 1912 on its maiden voyage?",
      "Lusitania",
      "Titanic",
      "Britannic",
      "Endeavour",
      "Titanic"
    ),
    new quizCard(
      "Who was the first man to step on the moon?",
      "Buzz Aldrin",
      "Neil Armstrong",
      "Yuri Gagarin",
      "Michael Collins",
      "Neil Armstrong"
    ),
    new quizCard(
      "Which war was fought between the North and South regions in the United States?",
      "World War I",
      "The Civil War",
      "The Revolutionary War",
      "The Cold War",
      "The Civil War"
    ),
    new quizCard(
      "Who was known as the 'Maid of Orléans'?",
      "Marie Curie",
      "Joan of Arc",
      "Queen Elizabeth I",
      "Catherine the Great",
      "Joan of Arc"
    ),
    new quizCard(
      "The Great Wall of China was primarily built to protect against which group?",
      "Mongols",
      "Romans",
      "Japanese",
      "Vikings",
      "Mongols"
    ),
    new quizCard(
      "Who was the South African president who was released from prison in 1990?",
      "Nelson Mandela",
      "Desmond Tutu",
      "Jacob Zuma",
      "Cyril Ramaphosa",
      "Nelson Mandela"
    ),
  ],
];

//FUNCTIONS FOR BUTTONS

function optionColor(){
  option[0].style.backgroundColor = "#F7F2EE";
  option[1].style.backgroundColor = "#F7F2EE";
  option[2].style.backgroundColor = "#F7F2EE";
  option[3].style.backgroundColor = "#F7F2EE";
}

function changeQuestion() {
  if (obj[k][i].correctAnswer === answer) {
    count++;
    optionColor();
    scorer.textContent = count;
    correctAnswers.push(i + 1);
  }
  else{
    optionColor();
    incorrectAnswers.push(i + 1);
  }
  if (i < obj[k].length - 1) {
    i++;
    displayOutput();
  } else {
    scorer.textContent = `${count}/10`;
    submitButton.disabled = true;
    displayScoreCard();
  };
}

function displayOutput() {
  theQuestion.innerHTML = obj[k][i].question;
  option[0].innerHTML = obj[k][i].firstOption;
  option[1].innerHTML = obj[k][i].secondOption;
  option[2].innerHTML = obj[k][i].thirdOption;
  option[3].innerHTML = obj[k][i].fourthOption;
  optionSection.style.display = "none";
  scoreCard.style.display ="none";
  answer = "null";
  updateProgressBar();
  timer(30);
  updatelivePoints();


let resultsList = document.querySelector("#resultsList");
resultsList.innerHTML = `
<p id='outcome'>Correct:${correctAnswers.join(", ") || "None"}</p>
<p id='outcome'>Incorrect: ${incorrectAnswers.join(", ") || "None"}</p>
`;
}

function displayOptions() {
  quizUISection.style.display = "none";
  optionSection.style.display = "flex";
  scoreCard.style.display ="none";
}

function displayScoreCard(){
  quizUISection.style.display = "none";
  optionSection.style.display = "none";
  scoreCard.style.display ="flex";
}

function clickA() {
  answer = obj[k][i].firstOption;
  optionColor();
  option[0].style.backgroundColor = "#8FC5C7";
}

function clickB() {
  answer = obj[k][i].secondOption;
  optionColor();
  option[1].style.backgroundColor = "#8FC5C7";
}

function clickC() {
  answer = obj[k][i].thirdOption;
  optionColor();
  option[2].style.backgroundColor = "#8FC5C7";
}

function clickD() {
  answer = obj[k][i].fourthOption;
  optionColor();
  option[3].style.backgroundColor = "#8FC5C7";
}

function selectGeo() {
  k = 0;
  i = 0;
  count = 0;
  optionColor();
  displayOutput();
  submitButton.disabled = false;
  optionSection.style.display = "none";
  quizUISection.style.display = "flex";
  scoreCard.style.display ="none"
  correctAnswers =[];
  incorrectAnswers =[];

}

function selectSci() {
  k = 1;
  i = 0;
  count = 0;
  optionColor();
  displayOutput();
  submitButton.disabled = false;
  optionSection.style.display = "none";
  quizUISection.style.display = "flex";
  scoreCard.style.display ="none";
  correctAnswers =[];
  incorrectAnswers =[];

}

function selectHis() {
  k = 2;
  i = 0;
  count = 0;
  optionColor();
  displayOutput();
  submitButton.disabled = false;
  optionSection.style.display = "none";
  quizUISection.style.display = "flex";
  scoreCard.style.display ="none";
  correctAnswers =[];
  incorrectAnswers =[];

}

function resetQuiz() {
  k = 0;
  i = 0;
  count = 0;
  optionColor();
  scorer.textContent = count;
  quizUISection.style.display = "none";
  optionSection.style.display = "flex";
  scoreCard.style.display ="none";
  correctAnswers =[];
  incorrectAnswers =[];

}

//EVENT LISTENERS TO PROGRAM BUTTONS

option[0].addEventListener("click", clickA);
option[1].addEventListener("click", clickB);
option[2].addEventListener("click", clickC);
option[3].addEventListener("click", clickD);

selector[0].addEventListener("click", selectGeo);
selector[1].addEventListener("click", selectSci);
selector[2].addEventListener("click", selectHis);

submitButton.addEventListener("click", changeQuestion);
resetButton1.addEventListener("click", resetQuiz);
resetButton2.addEventListener("click", resetQuiz);

// DISPLAY OPTIONS TO START QUIZ
displayOptions();

// UPDATE PROGRESS BAR
function updateProgressBar() {
  const progress =document.querySelector('.progress-bar');
  const questionNumber = i + 1; // since i is zero-based
  progress.textContent = `Question: ${questionNumber}/10`;
};

// UPDATE LIVE POINTS
function updatelivePoints() {
  const points =document.querySelector('.live-points');
  const point = count; // since i is zero-based
  points.textContent = `Current Score: ${point}/10`;
};

// TIMER FUNCTION

function timer(duration){
clearInterval(timerInterval);
let timer=duration;
timerInterval= setInterval( function(){
if (timer>0){
timer=timer-1;
let seconds=timer;
timeDisplay= `00:${seconds.toString().padStart(2,0)}`;
document.querySelector('.timer').innerHTML= timeDisplay;
} else{
clearInterval(timerInterval);
changeQuestion();
}
}, 1000);

}