import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../Contexts/FeedbackContext';

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);
  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleChange = (e) => {
    const value = Number(e.currentTarget.value);
    setSelected(value);  // update local state immediately
    select(value);        // propagate selection up to parent
  };

  return (
    <ul className='rating'>
      {[...Array(10)].map((_, i) => (
        <li key={i + 1}>
          <input
            type='radio'
            id={`num${i + 1}`}   // fix for template literal
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
