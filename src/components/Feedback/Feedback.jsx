
//src\components\Feedback\Feedback.jsx
import css from "./Feedback.module.css"
export default function Feedback({ props, totalFeedback, roundFeedback }) {
  const { good, neutral, bad } = props;
  return (
    <div className={css.feedbackWrapper}>
      <p className={css.scoreItem}>Good:{good}</p>
      <p className={css.scoreItem}>Neutral:{neutral}</p>
      <p className={css.scoreItem}>Bad:{bad}</p>
      <p className={css.scoreItem}>Total:{totalFeedback}</p>
      <p className={css.scoreItem}>Positive:{roundFeedback}</p>
    </div>
  )
}