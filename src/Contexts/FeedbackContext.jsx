import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: uuidv4(), text: 'This item is from context', rating: 10 }
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback((prev) => [newFeedback, ...prev]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const clearEdit = () => {
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  const updateFeedback = (id, upditem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...upditem } : item))
    );

setFeedbackEdit({
      item: {},
      edit: false,
    });

  };

  return (
    <FeedbackContext.Provider value={{
      feedback,
      addFeedback,
      deleteFeedback,
      feedbackEdit,
      editFeedback,
      clearEdit,
      updateFeedback,
    }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
