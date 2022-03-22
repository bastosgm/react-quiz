import React, { useState } from 'react'
import { Header } from './components/Header'
import { Radio } from './components/Form/Radio'
import { Footer } from './components/Footer';
import Vision from './img/Vision.png'

const questions = [
  {
    question: 'What method is used to create components?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    answer: 'React.createElement()',
    id: 'q1',
  },
  {
    question: 'How do we import an external component?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    answer: 'import Component from "./Component"',
    id: 'q2',
  },
  {
    question: 'Which hook is not native?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    answer: 'useFetch()',
    id: 'q3',
  },
  {
    question: 'What word should be used to create a hook?',
    options: ['set', 'get', 'use'],
    answer: 'use',
    id: 'q4',
  },
]

const App = () => {
  //I still don't found a type for this state :(
  const [answers, setAnswers] = useState<any>({ q1: '', q2: '', q3: '', q4: '' })
  const [slide, setSlide] = useState(0)
  const [finalResult, setfinalResult] = useState('')

  const handleChange = ({ target }: React.BaseSyntheticEvent<object, any, any>) => {
    setAnswers({ ...answers, [target.id]: target.value })
  }

  const result = () => {
    const correct = questions.filter(({ id, answer }) => answers[id] === answer)
    setfinalResult(`You scored: ${correct.length} of ${questions.length}`)
  }

  const handleClick = () => {
    if (slide < questions.length - 1) {
      setSlide(slide + 1)
    } else {
      setSlide(slide + 1)
      result()
    }
  }

  return <>
    <Header text="React Quiz" />
    <form onSubmit={(e) => e.preventDefault()} className="principal">
      {questions.map((question, index) => (
        <Radio
          active={slide === index}
          key={question.id}
          value={answers[question.id]}
          onChange={handleChange}
          {...question}
        />))}
      {finalResult ?
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p>{finalResult}</p>
          <img src={Vision} width="500" height="500" alt="finished" />
          <button onClick={() => window.location.reload()}>Try again!</button>
        </div> :
        <button onClick={handleClick}>Next</button>}
    </form>
    <Footer />
  </>
}

export default App
