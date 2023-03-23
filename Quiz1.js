let timeLeft = document.querySelector(".time-left");
let quiazContainer = document.getElementById("container");
let nextbtn = document.getElementByClassName("next-button");
let countofQuestion = document.querySelector("number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector("score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let coundown;

//questions and options array
const quizArray = [
    {
        id: "0",
        question: "HOW DO WE SAY YES ?",
        options : ["hai", "sayounara", "konnichiwa", "watashi"],
        correct: "hai"
    },
    {
        id: "1",
        question: "HOW DO WE SAY GOOD-BYE ?",
        options : ["sayonara", "sayounara", "konnichiwa", "cayounara"],
        correct: "sayounara"
    },
    {
        id: "2",
        question: "HOW DO WE SAY I AM ?",
        options : ["haiie", "iie", "konnichiwa", "watashi"],
        correct: "watashi"
    },
    {
        id: "3",
        question: "HOW DO WE SAY DELIGHTED ?",
        options : ["hajimemashite", "cayounara", "konnichiwa", "watashi"],
        correct: "hajimemashite"
    },
    {
        id: "4",
        question: "HOW DO WE SAY EXCUSE ME ?",
        options : ["hai", "shitsureishimasu", "konnichiwa", "watashi"],
        correct: "shitsureishimasu"
    }
];

//restart quiz
restart.addEventListener("click", () =>{
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");

});
//next button
nextbtn.addEventListener("click", () => {
    //increment questioncount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length){
        // HIDE QUESTION CONTAINER and display score
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        //user score
        userScore.innerHTML = " Your score is " + scoreCount + " out of " + questionCount;
    }else{
        // Display questioncount
        countofQuestion.innerHTML = questionCount + 1 + " of " + quizArray.length + " questions";
        // Display quiz
        quizDisplay(questionCount);
        count = 5;
        clearInterval(coundown);
        timerDisplay();
    }
});
// timer
const timerDisplay = () => {
    countdown = setInterval(() => {

        count--;
        timeLeft.innerHTML = `${count}`;
        if (count == 0){
            clearInterval(coundown);
            displayNext();
        }
    }, 1000);
};

// Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    // hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    // Display current question card
    quizCards[questionCount].classList.remove("hide");
};

// quiz creation
function quizCreation(){
    //randomly sort questions
    quizArray.sort(() => Math.random()- 0.5); 
    // generate quiz 
        for(let i of quizArray){
        // randomly sort options
        i.options.sort(() => Math.random(-0.5));
        // quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid","hide");
        // question number
        countofQuestion.innerHTML = 1 + " of " + quizArray.length + " questions ";
        // Question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        // options
        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
        `;
        quiazContainer.appendChild(div);
    }
}
// checker function to check if option is correct or not
function checker(userOption){
    let userSolution= userOption.innerText;
    let Question = document.getElementByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll("option-div");

    // if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct){
        userOption.classList.add("correct");
        scoreCount++;
    }else{
        userOption.classList.add("incorrect")
    }
}