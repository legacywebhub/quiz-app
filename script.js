var quizData = [
    {
        question: "What is the full meaning of HTML",
        a: "HyperText Markup Language",
        b: "HydroTextual Multifunction Language",
        c: "Honda Toyota Mitsubushi Lamborgini",
        d: "Heavyweight TNT Medal Lorem",
        correct: "a"
    },
    {
        question: "Which of the following is not a programming language",
        a: "C#",
        b: "Python",
        c: "CSS",
        d: "Javascript",
        correct: "c"
    },
    {
        question: "Which of the following is a Javascript framework for frontend",
        a: "React JS",
        b: "Django",
        c: "Xamarin",
        d: "Node",
        correct: "a"
    },
    {
        question: "Which of the following is an html tag or element for a list",
        a: "main",
        b: "div",
        c: "input",
        d: "ul",
        correct: "d"
    },
    {
        question: "Which of the following is stylesheet property",
        a: "meta",
        b: "function",
        c: "section",
        d: "position",
        correct: "d"
    },
    {
    question: "Which of the following is not amongst the top progamming language",
    a: "Python",
    b: "Assembly",
    c: "C",
    d: "Java",
    correct: "b"
},
];

const question = document.getElementById("question");
const option1 = document.getElementById("1");
const option2 = document.getElementById("2");
const option3 = document.getElementById("3");
const option4 = document.getElementById("4");
const btn = document.getElementById("btn");
const answerEls = document.querySelectorAll(".answer");
const container = document.getElementById("quiz-container");
let index = 0;


let currentQuizData = quizData[index];
question.innerText = currentQuizData.question;
option1.innerText = currentQuizData.a;
option2.innerText = currentQuizData.b;
option3.innerText = currentQuizData.c;
option4.innerText = currentQuizData.d;
let score = 0;


//Loads our data on the page and deselects radio button on refresh
function loadData() {
    deSelectAnswers();

    let currentQuizData = quizData[index];
    question.innerText = currentQuizData.question;
    option1.innerText = currentQuizData.a;
    option2.innerText = currentQuizData.b;
    option3.innerText = currentQuizData.c;
    option4.innerText = currentQuizData.d;
}

//Getting the Id of our selected radio item
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

//Deselecting our radio items on page refresh
function deSelectAnswers(){
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answerEl.checked = false;
        }
    });
}

//On suumit button
btn.addEventListener('click', function(){
    
    //gets answer Id, compares it to correct score and adds up if correct
    let getAnswer = getSelected();
    console.log(getAnswer);

    if (getAnswer === quizData[index].correct) {
        score++;
    }
    
    index++;

    //checks if our questions is exhausted and scores us, If not it loads next question data. 
    if (index < quizData.length) {
        loadData();
    } else {
        let length = quizData.length;
        container.innerHTML = `<h3>You have exhausted your question.  Your score is ${score}/${length}</h3> 
        <button onclick="location.reload()">Reload</button>`;
    }
});