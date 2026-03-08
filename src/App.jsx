import { useState } from 'react'
import { Start } from './components/Start'
import { Quiz } from './components/Quiz'
import { defaultQuestions, reshapeQuizData } from './utils/quizHelpers'


export default function App() {

  //state
  const [questions, setQuestions] = useState(() => reshapeQuizData(defaultQuestions))
  const [tdbToken, setTdbToken] = useState('')
  const [quizScreen, setQuizScreen] = useState(false)

  //button functions
  function startQuiz(){
      setQuizScreen(true)
  }



  console.log(questions)

  return (
    <main>
      {!quizScreen && <Start startQuiz={startQuiz}/>}
      {quizScreen && <Quiz questions={questions} />}
    </main>
  )
}