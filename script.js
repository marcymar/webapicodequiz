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
            "b. if i == 6",
            "c. if (i == 6)",
            "d. if i == 6 then"
        ]
    },
    {
        "question": "How do you start a FOR loop?",
        "correctAnswer": "a. for (i = 0; i <= 6; i++)",
        "answer": [
            "a. for (i = 0; i <= 6; i++)",
            "b. for i = 1 to 6",
            "c. for (i <= 6; i++)",
            "d. for (i = 0; i <= 6)"
        ]
    },
    {
        "question": "JavaScript is the same as Java",
        "correctAnswer": "b. false",
        "answer": [
            "a. true",
            "b. false",
        ]
    }
]

var score = 0;

// question loop
for(var i=0; i < questions.length; i++)
    var response = questions [i].prompt);
    if(response == questions[i].correctAnswer){
        score++;
        alert("Correct");
    } else {
        alert("Wrong");
    }
}
alert ("you got " + score + "/" + questions.length)

// check user answer and correct answer


// <!-- result/scoreboard section-->