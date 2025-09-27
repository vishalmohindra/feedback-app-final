import React, { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../Contexts/FeedbackContext';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const { addFeedback, feedbackEdit, updateFeedback, clearEdit } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    if (inputText.trim().length >= 10) {
      setBtnDisabled(false);
      setMessage('');
    } else {
      setBtnDisabled(true);
      setMessage('Review must be at least 10 characters');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length >= 10) {
      const newFeedback = { text, rating };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
        clearEdit();  // Clear edit mode after adding new feedback
      }

      setText('');
      setRating(10);
      setBtnDisabled(true);
      setMessage('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <RatingSelect select={setRating} selected={rating} />
        <div className="input-group">
          <input
            type="text"
            value={text}
            placeholder="Write a review"
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
