


export function Question(props){

    const question = props.questionObj.question
    

    return(
        <section className="question-container">
            <p>{question}</p>
            <div className="options-container">
                {props.questionObj.options.map((opt, index) => {
                    const optionId = `${props.questionObj.id}-${index}`
                    const questionId = props.questionObj.id

                    return (
                        <div key={optionId} className="option">
                        <input 
                            id={optionId} 
                            name={questionId} 
                            type="radio"
                            value={opt.answer} />
                        <label for={optionId}>{opt.answer}</label>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}