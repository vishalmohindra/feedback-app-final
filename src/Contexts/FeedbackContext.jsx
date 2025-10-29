import React, { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback items from backend
  const fetchFeedback = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/feedback'); // FIXED endpoint
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Fetch failed: ${text}`);
      }
      const data = await response.json();
      // Map MongoDB _id to id for React logic
      setFeedback(data.map(item => ({ ...item, id: item._id })));
    } catch (error) {
      console.error('Error fetching feedback:', error);
      setFeedback([]);
    }
    setIsLoading(false);
  };

  // Add new feedback to backend and state
  const addFeedback = async (newFeedback) => {
    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFeedback),
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Add feedback failed: ${text}`);
      }
      const data = await response.json();
      setFeedback([{ ...data, id: data._id }, ...feedback]); // Map id here too
    } catch (error) {
      console.error('Error adding feedback:', error);
    }
  };

  // Delete feedback by id from backend and update state
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/feedback/${id}`, { method: 'DELETE' });
        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Delete failed: ${text}`);
        }
        setFeedback(feedback.filter((item) => item.id !== id));
      } catch (error) {
        console.error('Error deleting feedback:', error);
      }
    }
  };

  // Enable edit mode for given feedback item
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  // Clear edit mode
  const clearEdit = () => {
    setFeedbackEdit({ item: {}, edit: false });
  };

  // Update feedback by id in backend and state
  const updateFeedback = async (id, updItem) => {
    try {
      const response = await fetch(`http://localhost:5000/api/feedback/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updItem),
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Update failed: ${text}`);
      }
      const data = await response.json();
      setFeedback(
        feedback.map((item) =>
          item.id === id ? { ...item, ...data, id: data._id } : item
        )
      );
    } catch (error) {
      console.error('Error updating feedback:', error);
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
        feedbackEdit,
        isLoading,
        editFeedback,
        clearEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
