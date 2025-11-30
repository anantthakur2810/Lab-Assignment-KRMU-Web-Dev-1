const quizQuestions = [
    {
        question: "What is the capital of India?",
        options: ["A) Mumbai", "B) Delhi", "C) Kolkata", "D) Chennai"],
        answer: "b"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["A) Venus", "B) Jupiter", "C) Mars", "D) Saturn"],
        answer: "c"
    },
    {
        question: "What is 5 + 7?",
        options: ["A) 10", "B) 11", "C) 12", "D) 13"],
        answer: "c"
    },
    {
        question: "Who wrote the Ramayana?",
        options: ["A) Tulsidas", "B) Valmiki", "C) Ved Vyas", "D) Kalidas"],
        answer: "b"
    },
    {
        question: "Which gas do plants release during photosynthesis?",
        options: ["A) Nitrogen", "B) Carbon dioxide", "C) Oxygen", "D) Hydrogen"],
        answer: "c"
    }
];

function runQuiz() {

    let score = 0; // score counter

    for (let i = 0; i < quizQuestions.length; i++) {

        const q = quizQuestions[i];

        let questionText =
            `${q.question}\n\n` +
            `Options:\n${q.options.join("\n")}\n\n` +
            `Enter A, B, C, or D:`;

        let userAnswer = prompt(questionText);

        if (userAnswer === null) {
            alert("Quiz cancelled.");
            return;
        }

        userAnswer = userAnswer.toLowerCase().trim();

        if (userAnswer === q.answer) {
            score++;
            alert("Correct!");
        } else {
            alert(
                "Wrong!\nCorrect Answer: " +
                q.answer.toUpperCase() +
                ") " +
                q.options[q.answer.charCodeAt(0) - 97].slice(3)
            );
        }
    }

    alert("Quiz Completed!\nYour Score: " + score + "/" + quizQuestions.length);
}