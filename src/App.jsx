import { useState } from 'react'
import { Start } from './components/Start'
import { Quiz } from './components/Quiz'
import { reshapeQuizData } from './utils/quizHelpers'

const API_URL = 'https://opentdb.com/api.php?amount=5&category=9&type=multiple'

export default function App() {

  const [questions, setQuestions] = useState([])
  const [quizScreen, setQuizScreen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchQuestions() {
    setIsLoading(true)
    setError(null)
    try {
      const res = await fetch(API_URL)
      const data = await res.json()
      if (data.response_code !== 0) throw new Error('Failed to fetch questions')
      setQuestions(reshapeQuizData(data.results))
      return true
    } catch (err) {
      setError(err.message)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  async function startQuiz() {
    const ok = await fetchQuestions()
    if (ok) setQuizScreen(true)
  }

  function handlePlayAgain() {
    fetchQuestions()
  }

  return (
    <main>
      {!quizScreen && (
        <Start startQuiz={startQuiz} isLoading={isLoading} error={error} />
      )}
      {quizScreen && (
        <Quiz questions={questions} onPlayAgain={handlePlayAgain} />
      )}
    </main>
  )
}