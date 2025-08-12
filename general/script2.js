const questions = [
    {
        question: "The scientist that thought of gravity with a drop of apple is ___________",
        answers: [
            {text: "Galileo Galilei", correct: true},
            {text: "Nicolas Tesla", correct: false},
            {text: "Isaac Newton", correct: false},
            {text: "Michael Faraday", correct: false},
        ]
    },
    {
        question: "The scientist that thought of gravity with a drop of apple is ___________",
        answers: [
            {text: "Galileo Galilei", correct: true},
            {text: "Nicolas Tesla", correct: false},
            {text: "Isaac Newton", correct: false},
            {text: "Michael Faraday", correct: false},
        ]
    },
    {
        question: "Country with the most highlands is",
        answers: [
            {text: "Nigeria", correct: false},
            {text: "Sweden", correct: true},
            {text: "California", correct: false},
            {text: "Tanzania", correct: false},
        ]
    },
    {
        question: "How many languages do we have in Nigeria?",
        answers: [
            {text: "300", correct: false},
            {text: "270", correct: false},
            {text: "240", correct: false},
            {text: "250", correct: true},

        ]
    },
    {
        question: "What year is Federal University of Technology Minna established?",
        answers: [
            {text: "1980", correct: false},
            {text: "1981", correct: false},
            {text: "1982", correct: false},
            {text: "1983", correct: true},

        ]
    },
    {
        question: "Where does River Niger and Benue meet?",
        answers: [
            {text: "Lokoja", correct: true},
            {text: "Abuja", correct: false},
            {text: "Niger", correct: false},
            {text: "Benue", correct: false},

        ]
    },
    {
        question: "How many Schools/Faculty do we have in FUTMINNA?",
        answers: [
            {text: "7", correct: false},
            {text: "8", correct: false},
            {text: "9", correct: true},
            {text: "10", correct: false},

        ]
    },
    {
        question: "The Full name of the 2022/2023 FUTMINNA Best Graduating Student is",
        answers: [
            {text: "Abdulhaq Aminu Obejara", correct: false},
            {text: "Abdulhakam Amina Obejara", correct: false},
            {text: "Abdulhakam Aminu Obejara", correct: true},
            {text: " Abdulhakam Aminu Obejera", correct: false},

        ]
    },
    {
        question: "What is the full name of the current Vice Chancellor of the federal university of technology Minna?",
        answers: [
            {text: "Prof. Faruk Adamu", correct: false},
            {text: "Prof. Uno Essang Uno", correct: false},
            {text: " Prof. Abdullahi Bala", correct: false},
            {text: "Prof. Faruk Adamu Kuta", correct: true},

        ]
    },
    {
        question: " Instrument used to measure relative density is _______",
        answers: [
            {text: "Hydrometer", correct: false},
            {text: "Hygrometer", correct: false},
            {text: "Density Bottle", correct: true},
            {text: "Relative Density bottle", correct: false},

        ]
    },
    {
        question: "Which Element is presence in abundance in the the sea water? ",
        answers: [
            {text: "Sodium", correct: false},
            {text: "Chlorine", correct: true},
            {text: "Magnesium", correct: false},
            {text: "Sulphur", correct: false},

        ]
    },
    {
        question: "Whose image is on #100 note?",
        answers: [
            {text: "Chief Muritala Muhammad", correct: false},
            {text: "Chief Yakubu Gowon ", correct: false},
            {text: "Nnamdi Azikiwe", correct: false},
            {text: "Chief Obefemi Awolowo ", correct: true},

        ]
    },
    {
        question: " Choose the odd one out of the following",
        answers: [
            {text: "Lungs", correct: true},
            {text: "Duodenum", correct: false},
            {text: "Small intestine", correct: false},
            {text: "Villi", correct: false},

        ]
    },
    {
        question: " When was Nigeria Capital moved from Lagos to Abuja",
        answers: [
            {text: "14th November, 1990", correct: false},
            {text: "14th October, 1991", correct: false},
            {text: "14th November, 1991", correct: true},
            {text: "14th October, 1990", correct: false},

        ]
    },
    {
        question: "Ear as Organ of the body is used for",
        answers: [
            {text: "Hearing ", correct: false},
            {text: "Balancing", correct: false},
            {text: "Hearing and Balancing", correct: true},
            {text: "None of the Above", correct: false},

        ]
    },
    {
        question: "Whats the name of the tutorial platform  organise this quiz?",
        answers: [
            {text: "Brainstorming Group ", correct: false},
            {text: "Brainstormer Group", correct: false},
            {text: "Brainstormers Group", correct: false},
            {text: "Brainstorm Group ", correct: true},

        ]
    },
    {
        question: "Solve for x 8x<sup>-2</sup> = 2/25",
        answers: [
            {text: "10", correct: true},
            {text: "4", correct: false},
            {text: "6", correct: false},
            {text: "8", correct: false},

        ]
    },
    




];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");


let dropdown = document.getElementById('optionsDropdown');
let selectedOption = dropdown.value;

function startQuiz(){
    selectedOption = 1;
    showQuestion()
}


function updateSelection() {
    var dropdown = document.getElementById('optionsDropdown');
    var selectedOption = dropdown.value;

    // Add your logic to handle the selected option in JavaScript
    console.log('Selected Option:', selectedOption);

    // Disable the selected option in the dropdown
    dropdown.options[dropdown.selectedIndex].disabled = true;

    showQuestion(selectedOption)
  }

function showQuestion(selectedOption){
    console.log(selectedOption)
    resetState();
    let currentQuestion = questions[selectedOption];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        // Function to hide 2 wrong answers and show 1 correct and 1 wrong answer


        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    }
        )
    
}

function hideAnswers() {
    const buttons = document.querySelectorAll('.btn');
    let correctAnswerShown = false;
    let wrongAnswerCount = 0;

    buttons.forEach(button => {
        if (button.dataset.correct === 'true') {
            button.style.display = 'inline-block';
            correctAnswerShown = true;
        } else if (wrongAnswerCount < 2) {
            button.style.display = 'none';
            wrongAnswerCount++;
        } else {
            button.style.display = 'inline-block';
        }
    });
    
}

function hide(){
    let twos = document.getElementById("hideAnswersButton");
    twos.style.display = "none"
    resetState
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    Array.from(answerButton.children).forEach(button => {
        button.disabled = true;
    });
    setTimeout(() => {
        if (isCorrect) {
            selectedBtn.classList.add("correct");
        } else {
            selectedBtn.classList.add("incorrect");
            setTimeout(() => {
                Array.from(answerButton.children).forEach(button => {
                    if (button.dataset.correct === "true") {
                        button.classList.add("correct");
                    }
                });
            }, 2000);
        }
    }, 2000);
}

document.getElementById('hideAnswersButton').addEventListener('click', hideAnswers);

function resetState() {
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
    let twos = document.getElementById("hideAnswersButton");
    twos.style.display = "flex"
}

startQuiz()