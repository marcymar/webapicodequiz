// questions
let questions = [
    {
        "question": "How do you start a FOR loop?",
        "correctAnswer": "a. for (i = 0; i <= 6; i++)",
        "answers": [
            "a. for (i = 0; i <= 6; i++)",
            "b. for i = 1 to 6",
            "c. for (i <= 6; i++)",
            "d. for (i = 0; i <= 6)"
        ]
    },
    {
        "question": "What tag in HTML do you place the JavaScript?",
        "correctAnswer": "c. <script>",
        "answers": [
            "a. <java>",
            "b. <jss>",
            "c. <script>",
            "d. <javascript>"
        ]
    },
    {
        "question": "How do you create a function in JavaScript?",
        "correctAnswer": "a. function myFunction()",
        "answers": [
            "a. function myFunction()",
            "b. function =my Function",
            "c. function:myFunction()",
            "d. function = myFunction()"
        ]
    },
    {
        "question": "Where do you place the JavaScript?",
        "correctAnswer": "d. b & c",
        "answers": [
            "a. The <style> section",
            "b. The <body> section",
            "c. The <head> section",
            "d. b & c"
        ]
    },
    {
        "question": "How do you write an IF statement in JavaScript?",
        "correctAnswer": "c. if (i == 6)",
        "answers": [
            "a. if i == 6",
            "b. if i = 6",
            "c. if (i == 6)",
            "d. if i == 6 then"
        ]
    },
]

let currentIndex = 0
let seconds = 150
let score = 0
let timer

const nextButton = document.getElementById('nextButton')

// content for questions (question + answers)
const nextQuestion = () => {
    document.getElementById('question').textContent = questions[currentIndex].question

    let answers = questions[currentIndex].answers

    document.getElementById('answers').innerHTML = ''

    for (let i = 0; i < answers.length; i++) {
        let answerElem = document.createElement('button')
        answerElem.className = 'answer btn btn-info btn-lg'
        answerElem.dataset.answer = answers[i]
        answerElem.textContent = answers[i]
        document.getElementById('answers').append(answerElem)
    }
}

// compare answer and user answer; if/else for correct or incorrect answer
const userAnswers = answer => {

    if (answer == questions[currentIndex].correctAnswer) {
        console.log('yeah man thats right')
        score++
        document.getElementById('score').textContent = score
        let resultElem = document.createElement('div')
        resultElem.className = 'alert alert-success'
        resultElem.textContent = 'Thats Correct!'
        document.getElementById('answers').append(resultElem)
    } else {
        console.log('nah dude thats wrong')
        let resultElem = document.createElement('div')
        resultElem.className = 'alert alert-danger'
        resultElem.textContent = 'Sorry, thats wrong.'
        document.getElementById('answers').append(resultElem)
    }
    nextButton.classList.remove('hide')

    // next button to navigate to next question
    nextButton.addEventListener('click', () => {
        currentIndex++
        if (currentIndex < questions.length) {
            nextQuestion()
        } else {
            gameOver()
        }
    })
}

// shows results of quiz
const gameOver = () => {
    document.getElementById('quiz').innerHTML = `
    <h1 class="display-4">Game Over!</h1>
    <h4>Your score is: ${score}</h4>
    <p>Enter name for the scoreboard: </p>
    <form>
        <div class="form-group">
        <label for="name">Your name here!</label>
        <input type="text" class ="form-control" id="name">
        <button id="finalScore" class="btn btn-info">Submit</button>
        </div>
    </form>
    `

}

// local storage and scoreboard
const userScore = (formInput) => {
    console.log(formInput)

    let scoreboard = JSON.parse(localStorage.getItem('scoreboard')) || []

    scoreboard.push(formInput)

    localStorage.setItem('scoreboard', JSON.stringify(scoreboard))

    scoreboard.sort((a, b) => {
        return b.score - a.score
    })

    // scoreboard formatting
    let tableElem = document.createElement('table')
    tableElem.className = 'table'
    tableElem.innerHTML = `
        <thead class="thead-light">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Score</th>
            </tr>
        </thead>
    `
    let tbodyElem = document.createElement('tbody')

    for (let i = 0; i < scoreboard.length; i++) {
        let rowElem = document.createElement('tr')
        rowElem.innerHTML = `
            <th scope="row">${i + 1}</th>
            <td>${scoreboard[i].name}</td>
            <td>${scoreboard[i].score}</td>
            `

        tbodyElem.append(rowElem)
    }
    tableElem.append(tbodyElem)

    document.getElementById('quiz').append(tableElem)
}

// quiz start button and timer
document.getElementById('beginQuiz').addEventListener('click', () => {
    timer = setInterval(() => {
        seconds--
        document.getElementById('time').textContent = seconds

        if (seconds <= 0) {
            clearInterval(timer)
            gameOver()
        }
    }, 1000);

    nextQuestion()
})

// user submit score and username
document.addEventListener('click', event => {
    if (event.target.classList.contains('answer')) {
        console.log(event.target.dataset.answer)
        userAnswers(event.target.dataset.answer)
    } else if (event.target.id === 'finalScore') {
        event.preventDefault()
        console.log('this submits the score and username hopefully')
        userScore({
            name: document.getElementById('name').value,
            score: score
        })
    }

})