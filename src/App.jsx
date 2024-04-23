import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
function App() {
  // const [obj, setObj] = useState({
	// good: 0,
	// neutral: 0,
	// bad: 0
  // })

  const [obj, setObj] = useState(() => {
    const savedScore = window.localStorage.getItem("feedbackData");
    if (savedScore !== null) {
      return JSON.parse(savedScore);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  })

  useEffect(() => {
    window.localStorage.setItem("feedbackData", JSON.stringify(obj) )
  }, [obj])
  const handleChangeFeedback = (type) => {
    setObj({...obj,[type]: obj[type] + 1 })
  }
  const handleResetFeedback = () => {
    setObj({good: 0,
	neutral: 0,
	bad: 0})
  }
  const { good, neutral, bad } = obj;
  const totalFeedback = good + neutral + bad;
  const roundFeedback = Math.round((good / totalFeedback) * 100)

  return (
    <>
      <Description />
      <Options handleChangeFeedback={handleChangeFeedback} totalFeedback={totalFeedback} handleResetFeedback={handleResetFeedback} />
      {totalFeedback > 0 && 
      <Feedback props={obj} roundFeedback={roundFeedback} totalFeedback={totalFeedback}/> || <p>No feedback yet</p>
      }  
    </>
  )
}

export default App
