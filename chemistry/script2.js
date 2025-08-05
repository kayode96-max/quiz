const questions = [
    {
        question: "Which of the following is found in cotton?",
        answers: [
            {text: "Starch", correct: false},
            {text: "Cellulose", correct: true},
            {text: "Fat", correct: false},
            {text: "Oil", correct: false},
        ]
    },
    {
        question: "Which of the following is found in cotton?",
        answers: [
            {text: "Starch", correct: false},
            {text: "Cellulose", correct: true},
            {text: "Fat", correct: false},
            {text: "Oil", correct: false},
        ]
    },
    {
        question: ".Substances Employed as drying agents are usually",
        answers: [
            {text: "Amphoteric", correct: false},
            {text: "Hygroscopic", correct: true},
            {text: "Efflorescent", correct: false},
            {text: "Acidic", correct: false},
        ]
    },
    {
        question: "The solution that will conduct the highest amount of electricity is",
        answers: [
            {text: "0.5 moldm³ of Hydrochloric Acid", correct: false},
            {text: "2.0 moldm³ of Hydrochloric Acid", correct: true},
            {text: ". 0.5 moldm³ of Ethanoic Acid ", correct: false},
            {text: "2.0 moldm³ of Ethanoic Acid [", correct: false},

        ]
    },
    {
        question: "Neutralization involves the reaction between H³0<sup>-</sup> and  ",
        answers: [
            {text: "Cl<sup>-</sup>", correct: false},
            {text: "OH<sup>-</sup>", correct: true},
            {text: "NO<sup>3-</sup>", correct: false},
            {text: "CO<sup>3-</sup>", correct: false},

        ]
    },
    {
        question: "What current will deposit 3.25g of Zinc in 2hrs?<br>[Zn = 65,F=96500mol<sup>-1</sup>]",
        answers: [
            {text: " 3.25A", correct: false},
            {text: "2.00A", correct: false},
            {text: " 1.34A", correct: true},
            {text: "0.67A", correct: false},

        ]
    },
    {
        question: "Oxygen is a mixture of two isotopes of 0¹⁶ and 0¹⁸ with relative abundance of 90% and 10% respectively. <br>The relative atomic massof Oxygen is?",
        answers: [
            {text: "16.0", correct: false},
            {text: "16.2", correct: true},
            {text: "17.0", correct: false},
            {text: "18.0", correct: false},

        ]
    },
    {
        question: "Which of the following has an Isomer?",
        answers: [
            {text: "C<sub>6</sub>H<sub>6</sub>", correct: false},
            {text: "C<sub>2</sub>H<sub>6</sub>", correct: false},
            {text: "C<sub>4</sub>H<sub>1</sub>", correct: true},
            {text: "C<sub>2</sub>H<sub>4</sub>", correct: false},

        ]
    },
    {
        question: "The filter in a cigarette reduces the nicotine content by",
        answers: [
            {text: "Burning", correct: false},
            {text: "Adsorption", correct: true},
            {text: "Evaporation", correct: false},
            {text: "Absorption ", correct: false},

        ]
    },
    {
        question: "The shapes of CO2, H20 and CH4 respectively are",
        answers: [
            {text: "Bent, Linear and Tetrahedral", correct: false},
            {text: "Bent, Tetrahedral and Linear", correct: false},
            {text: "Linear. Bent and Tetrahedral", correct: true},
            {text: "Tetrahedral, Linear and Bent", correct: false},

        ]
    },
    {
        question: "Which of this is not true of metals?",
        answers: [
            {text: "They are good conductor of Electricity", correct: false},
            {text: "They ionize by Electron loss", correct: false},
            {text: "Their Oxides are Acidic", correct: true},
            {text: "They have high melting point", correct: false},

        ]
    },
    {
        question: "Which of the following substances is not a homogeneous mixture?",
        answers: [
            {text: "Filtered Sea water", correct: false},
            {text: "Soft Drink", correct: false},
            {text: "Flood Water", correct: true},
            {text: "Writing Ink", correct: false},

        ]
    },
    {
        question: " The Hydrocarbon used in the production of styrene is",
        answers: [
            {text: "Ethyne", correct: false},
            {text: "Propyne", correct: true},
            {text: "Ethane", correct: false},
            {text: "Ethene", correct: false},

        ]
    },
    {
        question: "The basicity of CH3COOH is?",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},

        ]
    },
    {
        question: "The mixture of games used in photographer's flash tube is",
        answers: [
            {text: "Argon and Krypton", correct: false},
            {text: "Krypton and Xenon", correct: true},
            {text: "Helium and Argon", correct: false},
            {text: "Argon and Xenon", correct: false},

        ]
    },
    {
        question: "Consecutive member of Alkane Homologous series differ by",
        answers: [
            {text: "CH", correct: false},
            {text: "CH²", correct: true},
            {text: "CH³", correct: false},
            {text: "CnHn", correct: false},

        ]
    },
    {
        question: "Consecutive member of Alkane Homologous series differ by",
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
        button.classList.add("btn", "quiz-option");
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
    const buttons = document.querySelectorAll('.btn, .quiz-option');
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
    
    // Apply styles simultaneously to avoid delay appearance
    if (isCorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }
    
    // Show all correct answers and disable all buttons simultaneously
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
}

document.getElementById('hideAnswersButton').addEventListener('click', hideAnswers);

function resetState() {
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
    let twos = document.getElementById("hideAnswersButton");
    twos.style.display = "flex"
}

// Add animation class for question
const style = document.createElement('style');
style.innerHTML = `
.animate-question {
    animation: popIn 0.7s cubic-bezier(.68,-0.55,.27,1.55);
}
@keyframes popIn {
    0% { opacity: 0; transform: scale(0.8); }
    60% { opacity: 1; transform: scale(1.1); }
    100% { opacity: 1; transform: scale(1); }
}`;
document.head.appendChild(style);

startQuiz()