export const defaultQuestions = [
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "Who is depicted on the US hundred dollar bill?",
      "correct_answer": "Benjamin Franklin",
      "incorrect_answers": [
        "George Washington",
        "Abraham Lincoln",
        "Thomas Jefferson"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "What planet is not named after a Greek or Roman god?",
      "correct_answer": "Earth",
      "incorrect_answers": [
        "Jupiter",
        "Mars",
        "Mercury"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "What zodiac sign is represented by a pair of scales?",
      "correct_answer": "Libra",
      "incorrect_answers": [
        "Aries",
        "Capricorn",
        "Sagittarius"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "General Knowledge",
      "question": "Which of the following Ivy League universities has its official motto in Hebrew as well as in Latin?",
      "correct_answer": "Yale University",
      "incorrect_answers": [
        "Princeton University",
        "Harvard University",
        "Columbia University"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "General Knowledge",
      "question": "Directly between the Washington Monument and the Reflecting Pool is a memorial to which war?",
      "correct_answer": "World War II",
      "incorrect_answers": [
        "Vietnam War",
        "American Civil War",
        "American Revolutionary War"
      ]
    }
  ]

export function reshapeQuizData(quizArr){
    return quizArr.map((question, index) => {
      //map incorrect options to a new array
      const incorrect_options = question.incorrect_answers
        .map(ans => ({answer : ans, correct : false}))

      //join incorrect with correct option and shuffle
      const options = [
        {answer: question.correct_answer, correct: true},
        ...incorrect_options
      ].sort(() => Math.random() - 0.5)

      //return reshaped data
      return {id: `q${index}`, question: question.question, options: options}
    })
}
