import { useState } from 'react'
import { Start } from './components/Start'
import { Quiz } from './components/Quiz'
import { defaultQuestions, reshapeQuizData } from './utils/quizHelpers'


export default function App() {

  //state
  const [questions, setQuestions] = useState(() => reshapeQuizData(defaultQuestions))
  const [tdbToken, setTdbToken] = useState('')
  const [quizScreen, setQuizScreen] = useState(false)
  const [submitted, setSubmitted] = useState(true)
  const [selectedAnswers, setSelectedAnswers] = useState({})

  //button functions
  function startQuiz(){
      setQuizScreen(true)
  }

  console.log(questions)

  //app functions




  return (
    <main>
      {!quizScreen && <Start startQuiz={startQuiz}/>}
      {quizScreen && <Quiz 
        questions={questions} 
        submitted={submitted}
        selectedAnswers={selectedAnswers}
      />}
    </main>
  )
}