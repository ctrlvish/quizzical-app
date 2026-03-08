import { useState } from 'react'
import { Question } from './Question'

export function Quiz(props) {

    //state
    const [selectedAnswers, setSelectedAnswers] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [score, setScore] = useState(0)

    //button functions
    function handleSelectAnswer(questionId, value) {
        setSelectedAnswers(prev => {
            return {
                ...prev,
                [questionId]: value
            }
        })
    }

    function submitQuiz() {
        const newScore = props.questions.reduce((total, question) => {
            const selectedAnswer = selectedAnswers[question.id]
            const correctOption = question.options.find(opt => opt.correct)

            if (!correctOption) return total

            return total + (selectedAnswer === correctOption.answer ? 1 : 0)
        }, 0)

        setScore(newScore)
        setSubmitted(true)
    }

    function restartQuiz() {
        setSelectedAnswers({})
        setScore(0)
        setSubmitted(false)
    }


    return (
        <section className={`quiz-container ${submitted ? "submitted" : ""}`}>
            <form>
                {props.questions.map(questionObj => {
                    return <Question
                        key={questionObj.id}
                        questionObj={questionObj}
                        selectedAnswers={selectedAnswers}
                        handleSelectAnswer={handleSelectAnswer}
                        submitted={submitted}
                    />
                })}
            </form>
            {!submitted &&
                <button className='purple-btn' onClick={submitQuiz}>Check Answers</button>}
            {submitted &&
                <div className='score-section'>
                    <p>You scored {score}/{props.questions.length} correct answers</p>
                    <button className="purple-btn" onClick={restartQuiz}>Play again</button>
                </div>}
        </section>
    )
}