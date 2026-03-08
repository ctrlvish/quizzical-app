


export function Question(props){

    const question = props.questionObj.question

    function handleChange(questionId, value){
        console.log(questionId)
        console.log(value)
    }
    

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
                            value={opt.answer}
                            onChange={(e) => handleChange(questionId, e.target.value)} />
                        <label htmlFor={optionId}>{opt.answer}</label>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}