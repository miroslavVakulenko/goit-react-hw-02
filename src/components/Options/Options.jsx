//src\components\Options\Options.jsx
export default function Options({ handleChangeFeedback, totalFeedback, handleResetFeedback }) {
  return (
    <>
      <button onClick={() => handleChangeFeedback('good')}>Good</button>
      <button onClick={() => handleChangeFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleChangeFeedback('bad')}>Bad</button>
      {totalFeedback > 0 &&       <button onClick={handleResetFeedback}>Reset</button>
      }
    </>
  )
}