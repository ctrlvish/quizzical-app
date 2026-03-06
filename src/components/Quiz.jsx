import { Question } from './Question'

export function Quiz(props){


    return (
        <section className="quiz-container">
            {props.questions.map(questionObj => {
                return <Question 
                    question={questionObj.question}
                    correctAns={questionObj.correct_answer}
                    incorrectAns={questionObj.incorrect_answers}
                    selectedAns={props.selectedAns}
                />
            })}
        </section>
    )
}