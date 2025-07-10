// DOM elements
const categorySelector = document.getElementById('categorySelector');
const quizCategory = document.getElementById('quizCategory');
const startQuizBtn = document.getElementById('startQuizBtn');
const quizContent = document.getElementById('quizContent');
const questionContainer = document.getElementById('questionContainer');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const resultsContainer = document.getElementById('resultsContainer');
const finalScore = document.getElementById('finalScore');
const resultMessage = document.getElementById('resultMessage');
const restartBtn = document.getElementById('restartBtn');

// Quiz state variables
let currentCategory = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let quizCompleted = false;

// Initialize the quiz
function initQuiz() {
    currentCategory = quizCategory.value;
    currentQuestions = [...quizData[currentCategory]];
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = Array(currentQuestions.length).fill(null);
    quizCompleted = false;
    
    // Shuffle questions for variety
    shuffleArray(currentQuestions);
    
    // Show quiz content and hide category selector
    categorySelector.style.display = 'none';
    quizContent.style.display = 'block';
    resultsContainer.style.display = 'none';
    
    // Load the first question
    loadQuestion();
}

// Load the current question
function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    
    // Create question HTML
    let optionsHtml = '';
    question.options.forEach((option, index) => {
        let optionClass = 'option';
        if (userAnswers[currentQuestionIndex] === option) {
            optionClass += ' selected';
        }
        optionsHtml += `<div class="${optionClass}" onclick="selectOption(this, '${option}')">${option}</div>`;
    });
    
    questionContainer.innerHTML = `
        <div class="question-container active">
            <div class="question-text">${question.question}</div>
            <div class="options-container">${optionsHtml}</div>
            <div class="feedback" id="feedback"></div>
        </div>
    `;
    
    // Update navigation buttons
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
    
    // Hide feedback if not answered yet
    if (userAnswers[currentQuestionIndex] === null) {
        document.getElementById('feedback').style.display = 'none';
    }
}

// Select an option
function selectOption(element, option) {
    if (quizCompleted) return;
    
    // Remove selected class from all options
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    element.classList.add('selected');
    
    // Store user's answer
    userAnswers[currentQuestionIndex] = option;
    
    // Provide instant feedback
    const question = currentQuestions[currentQuestionIndex];
    const feedback = document.getElementById('feedback');
    
    if (option === question.answer) {
        feedback.textContent = `Correct! ${question.explanation}`;
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = `Incorrect. The correct answer is: ${question.answer}. ${question.explanation}`;
        feedback.className = 'feedback incorrect';
    }
    
    feedback.style.display = 'block';
}

// Navigate to previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

// Submit the quiz
function submitQuiz() {
    // Calculate score
    score = 0;
    for (let i = 0; i < currentQuestions.length; i++) {
        if (userAnswers[i] === currentQuestions[i].answer) {
            score++;
        }
    }
    
    // Show results
    quizContent.style.display = 'none';
    resultsContainer.style.display = 'block';
    finalScore.textContent = `Score: ${score}/${currentQuestions.length}`;
    
    // Display result message based on score
    const percentage = (score / currentQuestions.length) * 100;
    if (percentage >= 80) {
        resultMessage.textContent = "Excellent work! You really know your stuff!";
    } else if (percentage >= 60) {
        resultMessage.textContent = "Good job! You have a solid understanding.";
    } else if (percentage >= 40) {
        resultMessage.textContent = "Not bad! Keep learning and you'll improve.";
    } else {
        resultMessage.textContent = "Keep practicing! Review the material and try again.";
    }
    
    quizCompleted = true;
}

// Restart the quiz
function restartQuiz() {
    categorySelector.style.display = 'block';
    quizContent.style.display = 'none';
    resultsContainer.style.display = 'none';
}

// Utility function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Event listeners
startQuizBtn.addEventListener('click', initQuiz);
prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);
submitBtn.addEventListener('click', submitQuiz);
restartBtn.addEventListener('click', restartQuiz);

// Make functions available in global scope for HTML onclick
window.selectOption = selectOption;