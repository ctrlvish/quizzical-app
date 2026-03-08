import { Question } from './Question'

export function Quiz(props){


    return (
        <section className="quiz-container">
            <form>
            {props.questions.map(questionObj => {
                return <Question 
                    key={questionObj.id}
                    questionObj={questionObj}
                    selectedAnswers={props.selectedAnswers}
                />
            })}
            {!props.submitted && <></>}
            </form>
            {props.submitted && 
            <div className='score-section'>
                <p>You scored {5}/5 correct answers</p>
                <button className="purple-btn">Play again</button>
            </div>}
        </section>
    )
}