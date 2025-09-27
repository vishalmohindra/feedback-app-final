import { useContext } from 'react';
import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';  // Added FaEdit here
import FeedbackContext from '../Contexts/FeedbackContext';

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
      <div className='button-group'>
        <button onClick={() => editFeedback(item)} className='edit'>
          <FaEdit color='purple' />
        </button>
        <button onClick={() => deleteFeedback(item.id)} className='close'>
          <FaTimes color='purple' />
        </button>
      </div>
    </Card>
  );
}
export default FeedbackItem;
