const showAnswerBtn = document.querySelectorAll('.show-answer')

function showAnswer(e) {
    const btn = e.target
    const exeDiv = this.closest('.exe')
    const answerDiv = exeDiv.querySelector('.answer')

    if(answerDiv.classList.contains('non-active')){
        answerDiv.classList.remove('non-active')
        btn.textContent = 'Ukryj odpowiedź'
    }
    else {
        answerDiv.classList.add('non-active')
        btn.textContent = 'Pokaż odpowiedź'
    }
}

showAnswerBtn.forEach(function(btn){
    btn.addEventListener('click', showAnswer)
})