


export function Question(props){

    


    return(
        <section className="question-container">
            <p>{props.question}</p>
            <div className="options-container">
                <button>{props.correctAns}</button>
                {props.incorrectAns.map(ans => {
                    return <button>{ans}</button>
                })}
            </div>
        </section>
    )
}