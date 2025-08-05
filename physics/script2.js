const questions = [
    {
        question: "Which of the following possesses the least cohesive force between its molecules?",
        answers: [
            {text: "Solid State", correct: false},
            {text: "Gaseous States", correct: true},
            {text: "Liquid State", correct: false},
            {text: "Aqueous State", correct: false},
        ]
    },
    {
        question: "Which of the following possesses the least cohesive force between its molecules?",
        answers: [
            {text: "Solid State", correct: false},
            {text: "Gaseous States", correct: true},
            {text: "Liquid State", correct: false},
            {text: "Aqueous State", correct: false},
        ]
    },
    {
        question: "Mass and weight are respectively measured by",
        answers: [
            {text: "Weighing balance and beam Balance", correct: false},
            {text: "Spring Balance and weigh balance", correct: false},
            {text: "Beam balance and Spring Balance", correct: true},
            {text: "Spring Balance and Beam balance ", correct: false},
        ]
    },
    {
        question: "Which of the following pairs have the same dimension?",
        answers: [
            {text: "Impulse and momentum", correct: true},
            {text: "Moment and momentum", correct: false},
            {text: "Pressure and moment ", correct: false},
            {text: "Force and Power", correct: false},

        ]
    },
    {
        question: "The silver wall in the thermos flask prevents heatloss by ",
        answers: [
            {text: "Radiation only", correct: true},
            {text: "Convection only", correct: false},
            {text: "Convection and Radiation", correct: false},
            {text: "Conduction and Convection ", correct: false},

        ]
    },
    {
        question: "A capacitor of capacitance 10microFarad has a charge of 10<sup>-5</sup>C on the plate. <br>Calculate the energy stored by the capacitor?",
        answers: [
            {text: "2 x 10<sup>-5</sup>J", correct: false},
            {text: "4 x 10<sup>-6</sup>J", correct: false},
            {text: "6 x 10<sup>-4</sup>J", correct: false},
            {text: "5 x 10<sup>-5</sup>J", correct: true},

        ]
    },
    {
        question: "I. ENERGY <br>II MOMENTUM. <br>Which of the above is/are conserved in inelastic collision",
        answers: [
            {text: "I only", correct: false},
            {text: "II only", correct: true},
            {text: "I and II", correct: false},
            {text: "Neither I nor II", correct: false},

        ]
    },
    {
        question: "An Elastic wire of natural length 5.00cm is stretched to 5.02cm by a 50N force. If it has a cross sectional area of 2 x 10<sup>-5</sup>m², <br></br>calculate the Young modulus for the material wire.",
        answers: [
            {text: "6.25 x 10<sup>-8</sup>N/m²", correct: false},
            {text: "6.25 x 10<sup>11</sup>N/m²", correct: false},
            {text: "6.25 x 10<sup>8</sup>N/m²", correct: true},
            {text: "6.25  x 10<sup>-10</sup>N/m²", correct: false},

        ]
    },
    {
        question: "Which of the following forces keeps a balloon afloat mid air",
        answers: [
            {text: "Tension", correct: false},
            {text: "Gravity", correct: false},
            {text: "Upthrust", correct: true},
            {text: "Viscous Drag", correct: false},

        ]
    },
    {
        question: "Water wave is",
        answers: [
            {text: "Longitudinal and Electromagnetic", correct: false},
            {text: "Transverse and Electromagnetic", correct: false},
            {text: "Transverse and mechanical", correct: true},
            {text: "Longitudinal and mechanical", correct: false},

        ]
    },
    {
        question: "Two mirrors are inclined at an angle 30° to each other. How many images are seen in the mirror when an object is placed between them?",
        answers: [
            {text: "12", correct: false},
            {text: "23", correct: false},
            {text: "11", correct: true},
            {text: "24", correct: false},

        ]
    },
    {
        question: "Which of the following is the dimension of Pressure?",
        answers: [
            {text: ". ML<sup>-1</sup>T<sup>-2</sup>", correct: true},
            {text: "MLT<sup>-2</sup>", correct: false},
            {text: "ML<sup>2</sup>T<sup>-3</sup>", correct: false},
            {text: "ML<sup>-3</sup>", correct: false},

        ]
    },
    {
        question: " The inner diameter of a test tube can be measured accurately using",
        answers: [
            {text: "Micrometer screw guage", correct: false},
            {text: "Pair of Divider", correct: false},
            {text: "Metre Rule", correct: false},
            {text: "Pair of Vernier Calliper ", correct: true},

        ]
    },
    {
        question: "Which of the following has the same unit as watt?",
        answers: [
            {text: "Force x time", correct: false},
            {text: "Force x Distance", correct: false},
            {text: "Force x acceleration", correct: false},
            {text: " Force x Velocity", correct: true},

        ]
    },
    {
        question: "A train has an initial velocity of 44m/s and an  acceleration of 4m/s². IT'S velocity after 10 seconds is ",
        answers: [
            {text: "2m/s", correct: false},
            {text: "4m/s", correct: true},
            {text: "8m/s", correct: false},
            {text: "12m/s", correct: false},

        ]
    },
    {
        question: "Two points on a velocity time graph 📊 have coordinate (5s,10ms‐¹), (20s and 20ms‐¹). Calculate the mean acceleration between the two points. ",
        answers: [
            {text: "0.67ms<sup>-1</sup>", correct: true},
            {text: "0.83ms<sup>-1</sup>", correct: false},
            {text: "1.50ms<sup>-1</sup>", correct: false},
            {text: "2.00ms<sup>-1</sup>", correct: false},

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
function hide(){
    let twos = document.getElementById("hideAnswersButton");
    twos.style.display = "none"
    resetState
}
function resetState() {
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
    let twos = document.getElementById("hideAnswersButton");
    twos.style.display = "flex"
}

startQuiz()