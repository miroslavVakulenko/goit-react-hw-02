
//src\components\Feedback\Feedback.jsx
export default function Feedback({ props }) {
  const { good, neutral, bad } = props;
  console.log(good, neutral, bad)
  return (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:</p>
      <p>Positive:</p>
    </div>
  )
}