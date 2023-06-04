const quizBox = document.querySelector('.quiz-box')
const startBox = document.querySelector('.starter')
const loseWin = document.querySelector('.lose-window')
const winWin = document.querySelector('.win-window')
const startBtn = document.querySelector('.start-btn')
const againBtn = document.querySelectorAll('.tryAgain')
const tipText = document.querySelector('.tipText')
const tipBox = document.querySelector('.tipBox')
const tipBtn = document.querySelector('.tipBtn')
const fiftyFiftyBtn = document.querySelector('.fifty-fifty')
const questionNumber = document.querySelector('.question-number')
const departmentsCheckboxes = document.querySelectorAll('input[name="department"]')
const selectAllBtn = document.querySelector('.select-all-btn')
const canvasDiv = document.querySelector('.canvas_div')


let isTipUsed = false
let is50on50Used = false
const usedIndex = []
let currectQuestionIndex
let selectedDepartments = []
let filteredQuestions = [];

const createQuizBox = (questions) => {
    if (usedIndex.length < 12) {
        currectQuestionIndex = Math.floor(Math.random() * questions.length);
        while (usedIndex.includes(currectQuestionIndex)) {
            currectQuestionIndex = Math.floor(Math.random() * questions.length)
        }
        usedIndex.push(currectQuestionIndex)
        const qsBox = document.createElement('div')
        qsBox.classList.add('pytanie')
        questionNumber.textContent = `Pytanie nr. ${usedIndex.length}`
        const quest = document.createElement('p')
        quest.textContent = questions[currectQuestionIndex].question

        const ansBox = document.createElement('div')
        ansBox.classList.add('ans-box')

        const shuffledAnswers = shuffleAnswers([...Object.values(questions[currectQuestionIndex].answers)])

        for (let i = 0; i < 4; i++) {
            const ans = document.createElement('button')
            ans.classList.add('answer', `ans${i + 1}`)
            ans.textContent = shuffledAnswers[i]
            ansBox.append(ans)
        }

        quizBox.innerHTML = '';
        hideTip();
        quizBox.append(quest, ansBox);
        ansBox.addEventListener('click', checkAnswer);
    } else {
        win();
    }
}
const checkAnswer = (e) => {
    if (e.target.classList.contains('answer')) {
      const selectedAnswer = e.target.textContent
      const currentQuestion = filteredQuestions[currectQuestionIndex]
  
      if (selectedAnswer === currentQuestion.correctAnswer) {
        createQuizBox(filteredQuestions)
      } else {
        lose()
      }
    }
  }
const lose = () => {
    tipBox.classList.add('non-active')
    quizBox.innerHTML = ''
    questionNumber.innerHTML = ''
    loseWin.classList.remove('non-active')
    canvasDiv.classList.add('non-active')
    againBtn.forEach(button => {
        button.classList.remove('non-active')
    })
    usedIndex.length = 0
    departmentsCheckboxes.forEach((checkbox) => {
        checkbox.checked = false
    })
}

const win = () => {
    tipBox.classList.add('non-active')
    questionNumber.innerHTML = ''
    quizBox.innerHTML = ''
    winWin.classList.remove('non-active')
    canvasDiv.classList.add('non-active')
    againBtn.forEach(button => {
        button.classList.remove('non-active')
    })
    usedIndex.length = 0
    departmentsCheckboxes.forEach((checkbox) => {
        checkbox.checked = false
    })
}

const showGameMenu = () => {
    startBox.classList.remove('non-active')  
    winWin.classList.add('non-active')
    loseWin.classList.add('non-active')
    canvasDiv.classList.add('non-active')
    againBtn.forEach(button=> {
        button.classList.add('non-active')
    })
}

const startQuiz = () => {
    selectedDepartments = getSelectedDepartments()
    if(selectedDepartments.length===0){
        alert("Wybierz przynajmniej jeden dział")
        return
    }
    tipBox.classList.remove('non-active')
    quizBox.classList.remove('non-active')
    startBox.classList.add('non-active')
    canvasDiv.classList.remove('non-active')
    againBtn.forEach(button => {
        button.classList.add('non-active')
    })
    loseWin.classList.add('non-active')
    winWin.classList.add('non-active')
    isTipUsed = false
    tipBtn.disabled = false
    fiftyFiftyBtn.disabled = false

    filteredQuestions = filterQuestionsByDepartments(selectedDepartments)

    if (filteredQuestions.length > 0) {
        createQuizBox(filteredQuestions)
    }
}

const getSelectedDepartments = () =>{
    selectedDepartments = []
    
    departmentsCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedDepartments.push(checkbox.value)
      }
    })
    
    return selectedDepartments
}
  
const filterQuestionsByDepartments = (selectedDepartments) => {
    return qsAndAns.filter((question) => selectedDepartments.includes(question.department))
}

const showTip = () => {
        isTipUsed = true
        tipText.textContent = qsAndAns[currectQuestionIndex].tip
        tipBtn.disabled = true
}

const hideTip = () => {
    tipText.textContent = '';
}

const fiftyFifty = () => {
    fiftyFiftyBtn.disabled = true;

    const currentQuestion = filteredQuestions[currectQuestionIndex];
    const answerButtons = document.querySelectorAll('.answer');

    let removedAnswerIndex1;
    let removedAnswerIndex2;

    do {
        removedAnswerIndex1 = Math.floor(Math.random() * answerButtons.length);
    } while (answerButtons[removedAnswerIndex1].textContent === currentQuestion.correctAnswer);

    do {
        removedAnswerIndex2 = Math.floor(Math.random() * answerButtons.length);
    } while (removedAnswerIndex2 === removedAnswerIndex1 || answerButtons[removedAnswerIndex2].textContent === currentQuestion.correctAnswer);

    answerButtons[removedAnswerIndex1].disabled = true
    answerButtons[removedAnswerIndex2].disabled = true
}

const toggleSelectAll = () => {
    const allChecked = [...departmentsCheckboxes].some((checkbox) => checkbox.checked)
    departmentsCheckboxes.forEach((checkbox)=> {
        checkbox.checked = !allChecked
    })

    if(allChecked){
        selectAllBtn.textContent = 'Zaznacz wszystkie'
    }
    else {
        selectAllBtn.textContent = 'Odznacz wszystkie'
    }
}

const shuffleAnswers = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };


startBtn.addEventListener('click', startQuiz)
againBtn.forEach(button => {
    button.addEventListener('click', showGameMenu)
})
tipBtn.addEventListener('click', showTip)
fiftyFiftyBtn.addEventListener('click', fiftyFifty)
selectAllBtn.addEventListener('click', toggleSelectAll)