const questions = [
    {
        question: "HOW DO WE SAY YES ?",
        answers: [
            { text: "sayounara", correct: false},
            { text: "hai", correct: true},
            { text: "konnichiwa", correct: false},
            { text: "watashi", correct: false},
        ]
        
    },
    {
        question: "HOW DO WE SAY GOOD-BYE ?",
        answers: [
            { text: "sayounara", correct: true},
            { text: "sayonara", correct: false},
            { text: "konnichiwa", correct: false},
            { text: "watashi", correct: false},
        ]
    },
    {
        question: "HOW DO WE SAY I AM ?",
        answers: [
            { text: "haiie", correct: false},
            { text: "iie", correct: false},
            { text: "konnichiwa", correct: false},
            { text: "watashi", correct: true},
        ]
    },
    {

        question: "HOW DO WE SAY DELIGHTED ?",
        answers: [
            { text: "haiie", correct: false},
            { text: "watashi", correct: false},
            { text: "konnichiwa", correct: false},
            { text: "hajimemashite", correct: true},
        ]
    },
    {
        question: "HOW DO WE SAY SORRY TO BOTHER YOU ?",
        answers: [
            { text: "haiie", correct: false},
            { text: "watashi", correct: false},
            { text: "shitsureishimasu", correct: true},
            { text: "hajimemashite", correct: false},
        ]
        
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer (e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }

});

startQuiz();