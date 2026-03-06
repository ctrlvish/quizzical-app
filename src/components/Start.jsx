export function Start(props){


    return (
        <section className="start-container">
            <h1>Quizzical</h1>
            <p>trivia edition!</p>
            <button className="purple-btn" onClick={props.startQuiz}>Start Quiz</button>
        </section>
    )
}