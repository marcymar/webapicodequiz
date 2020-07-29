// questions
let questions = [
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
        "question": "How do you write an IF statement in JavaScript?",
        "correctAnswer": "c. if (i == 6)",
        "answers": [
            "a. if i == 6",
            "b. if i = 6",
            "c. if (i == 6)",
            "d. if i == 6 then"
        ]
    },
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
        "question": "JavaScript is the same as Java",
        "correctAnswer": "b. no",
        "answers": [
            "a. yes",
            "b. no"
        ]
    }
]

let currentIndex = 0
let seconds = 150
let score = 0
let timer

const nextButton = document.getElementById('nextButton')


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

document.getElementById('beginQuiz').addEventListener('click', () => {
    nextQuestion()
})


document.addEventListener('click', event => {
    if (event.target.classList.contains('answer')) {
        console.log(event.target.dataset.answer)
        if (event.target.dataset.answer == questions[currentIndex].correctAnswer) {
            console.log('yeah man thats right')
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

        nextButton.addEventListener('click', () => {
            currentIndex++
            nextQuestion()
        })
    }
})


