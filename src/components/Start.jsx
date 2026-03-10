export function Start(props) {
    return (
        <section className="start-container">
            <h1>Quizzical</h1>
            <p>general knowledge quiz</p>
            {props.error && <p className="error">{props.error}</p>}
            <button
                className="purple-btn"
                onClick={props.startQuiz}
                disabled={props.isLoading}
            >
                {props.isLoading ? 'Loading...' : 'Start Quiz'}
            </button>
        </section>
    )
}