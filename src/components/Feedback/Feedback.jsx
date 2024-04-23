
//src\components\Feedback\Feedback.jsx
export default function Feedback({ props, totalFeedback, roundFeedback }) {
  const { good, neutral, bad } = props;
  return (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{totalFeedback}</p>
      <p>Positive:{roundFeedback}</p>
    </div>
  )
}