import clsx from 'clsx';


export function Question(props){

    const question = props.questionObj.question

    



    return(
        <section className="question-container">
            <p>{question}</p>
            <div className="options-container">
                {props.questionObj.options.map((opt, index) => {
                    const optionId = `${props.questionObj.id}-${index}`
                    const questionId = props.questionObj.id
                    const selectedAnswerForQuestion = props.selectedAnswers?.[questionId]
                    const isSelected = selectedAnswerForQuestion === opt.answer

                    const optionClass = clsx('option', {
                        correct: props.submitted && opt.correct,
                        incorrect: props.submitted && isSelected && !opt.correct
                    })

                    return (
                        <div key={optionId} className={optionClass}>
                            <input
                                id={optionId}
                                name={questionId}
                                type="radio"
                                value={opt.answer}
                                checked={isSelected}
                                onChange={(e) => props.handleSelectAnswer(questionId, e.target.value)}
                                disabled={props.submitted}
                            />
                            <label htmlFor={optionId}>{opt.answer}</label>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}