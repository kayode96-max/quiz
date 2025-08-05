const questions = [
    {
        question: "A man earns #3,500 per month out of which he spends 15% on his children's education. If he Spends additional #1950 on food, how much does he have left?",
        answers: [
            {text: "#525", correct: false},
            {text: "#1025", correct: true},
            {text: "#1950", correct: false},
            {text: "#2975", correct: false},
        ]
    },
    {
        question: "A man earns #3,500 per month out of which he spends 15% on his children's education. If he Spends additional #1950 on food, how much does he have left?",
        answers: [
            {text: "#525", correct: false},
            {text: "#1025", correct: true},
            {text: "#1950", correct: false},
            {text: "#2975", correct: false},
        ]
    },
    {
        question: "y= x² - 1/x, Find dy/dx",
        answers: [
            {text: "2x-1/x²", correct: false},
            {text: "2x + x²", correct: false},
            {text: "2x-x²", correct: false},
            {text: "2x + 1/x²", correct: true},
        ]
    },
    {
        question: "The median of 2,3,7,3,4,5,8,9,9,4,5,3,4,2,4 and 5",
        answers: [
            {text: "9", correct: false},
            {text: "11", correct: false},
            {text: "4", correct: true},
            {text: "7", correct: false},

        ]
    },
    {
        question: "In how many ways can the letter of the word TOTALITY be arranged?",
        answers: [
            {text: "6720", correct: true},
            {text: "6270", correct: false},
            {text: "6207", correct: false},
            {text: "6027", correct: false},

        ]
    },
    {
        question: "Solve for x in the simultaneous equation below <br>x²-y² = 4<br> x+y = 2",
        answers: [
            {text: "x = 0", correct: false},
            {text: "x = 2", correct: true},
            {text: "x = -2", correct: false},
            {text: "x = 3", correct: false},

        ]
    },
    {
        question: "U is inversely proportional to the cube of V and U is 81 when V is 2. <br>Find U when V=3",
        answers: [
            {text: "24", correct: true},
            {text: "27", correct: false},
            {text: "32", correct: false},
            {text: "36", correct: false},

        ]
    },
    {
        question: "Find the Equation of the line through the points(-2,1) and (-½,4)",
        answers: [
            {text: "y= 2x -3", correct: false},
            {text: " y= 2x +5", correct: true},
            {text: "y= 3x -2", correct: false},
            {text: "y = 2x +1", correct: false},

        ]
    },
    {
        question: "Convert 27 base 10 to another number in base three",
        answers: [
            {text: "1100", correct: false},
            {text: "1000", correct: false},
            {text: "1001", correct: false},
            {text: "1010", correct: true},

        ]
    },
    {
        question: "Evaluate 1.25 × 0.0025/0.05 correct to 1 decimal place",
        answers: [
            {text: "6.3", correct: false},
            {text: "0.5", correct: false},
            {text: "0.6", correct: true},
            {text: "6.2", correct: false},

        ]
    },
    {
        question: "3 BSG team members share a number of apples in the ratio 5:3:2. If the highest share is 40 apples, <br>Find the smallest share. ",
        answers: [
            {text: "16", correct: true},
            {text: "38", correct: false},
            {text: "36", correct: false},
            {text: "24", correct: false},

        ]
    },
    {
        question: "If X-4 is a factor of x² - x - k then K is",
        answers: [
            {text: "20", correct: false},
            {text: "2", correct: false},
            {text: "4", correct: false},
            {text: "12", correct: true},

        ]
    },
    {
        question: " If the angle of a quadrilateral are <br>(3y +10)°, <br>(2y +30)°, <br>(y+20)° <br>and 4y°, <br>Find the value of y.",
        answers: [
            {text: "66°", correct: false},
            {text: "12°", correct: false},
            {text: "30°", correct: true},
            {text: "42°", correct: false},

        ]
    },
    {
        question: "Evaluate log<sub>2</sub>8 + log<sub>2</sub>16 - log<sub>2</sub>4 ",
        answers: [
            {text: "6", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: false},
            {text: "5", correct: true},

        ]
    },
    {
        question: "How many sides has a regular polygon whose interior angle is 135° each?",
        answers: [
            {text: "8", correct: true},
            {text: "12", correct: false},
            {text: "10", correct: false},
            {text: "9", correct: false},

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