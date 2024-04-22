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
  // const handleChangeFeedback = (type) => {
  //   return setObj({
  //     ...obj,
  //     [type]:  obj[type] + 1
  //   })
  // }
  const handleChangeFeedback = (type) => {
    setObj({...obj,[type]: obj[type] + 1 })
  }
  // useEffect(() => {
  //   console.log('useEffect')
  // }, [obj])
  const { good, neutral, bad } = obj;
  console.log(good, neutral, bad)
  const totalFeedback = good + neutral + bad;
  console.log(totalFeedback)
  

  return (
    <>
      <Description />
      <Options handleChangeFeedback={handleChangeFeedback} />
      <Feedback props={obj} />
    </>
  )
}

export default App
