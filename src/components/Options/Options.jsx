//src\components\Options\Options.jsx
export default function Options({ handleChangeFeedback }) {
  return (
    <>
      <button onClick={() => handleChangeFeedback('good')}>Good</button>
      <button onClick={() => handleChangeFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleChangeFeedback('bad')}>Bad</button>
      <button>Reset</button>
    </>
  )
}