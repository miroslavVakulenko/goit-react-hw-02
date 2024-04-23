//src\components\Options\Options.jsx
import { optionsWrapper, buttonNeutral, buttonGood, buttonBad, buttonReset, button} from './Options.module.css'; 

export default function Options({ handleChangeFeedback, totalFeedback, handleResetFeedback }) {
  return (
    <div className={optionsWrapper}>
      <button className={`${buttonGood} ${button}`} onClick={() => handleChangeFeedback('good')}>Good</button>
      <button className={`${buttonNeutral} ${button}`} onClick={() => handleChangeFeedback('neutral')}>Neutral</button>
      <button className={`${buttonBad} ${button}`} onClick={() => handleChangeFeedback('bad')}>Bad</button>
      {totalFeedback > 0 &&       
        <button className={`${buttonReset} ${button}`} onClick={handleResetFeedback}>Reset</button>
      }
    </div>
  );
}
