import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
function App() {
  const [obj, setObj] = useState({
	good: 0,
	neutral: 0,
	bad: 0
  })
  const handleChangeFeedback = () => {
    return setObj({
      ...obj,
      good: { goodValue },
      neutral: { neutralValue },
      bad: {badvalue}
    })
  }

  return (
    <>
      <Description />
      <Options />
      <Feedback props={handleChangeFeedback} />
    </>
  )
}

export default App
