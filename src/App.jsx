import { useState } from 'react'
import { Start } from './components/Start'
import { Quiz } from './components/Quiz'
import { defaultQuestions } from './utils/quizHelpers'


export default function App() {

  //state
  const [questions, setQuestions] = useState(defaultQuestions)
  const [tdbToken, setTdbToken] = useState('')
  const [quizScreen, setQuizScreen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [selectedAns, setSelectedAns] = useState('')

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
        selectedAns={selectedAns}
      
      />}
    </main>
  )
}