import { Question } from './Question'

export function Quiz(props){


    return (
        <section className="quiz-container">
            <form>
            {props.questions.map(questionObj => {
                return <Question 
                    questionObj={questionObj}
                />
            })}
            </form>
        </section>
    )
}