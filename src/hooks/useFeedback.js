import { useCallback, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const useFeedback = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const localFeedback = localStorage.getItem('feedback');
    const parseFeedback = JSON.parse(localFeedback);
    if (parseFeedback?.length > 0) {
      setFeedback(parseFeedback);
    }
  }, []);

  useEffect(() => {
    feedback.length > 0
      ? localStorage.setItem('feedback', JSON.stringify(feedback))
      : localStorage.removeItem('feedback');
  }, [feedback]);

  const handleAddFeedback = useCallback(
    (name, message) => {
      const newFeedback = {
        id: feedback.length + 1,
        name,
        message,
        likes: 0,
      };
      setFeedback((prev) => [newFeedback, ...prev]);
    },
    [feedback.length],
  );

  const handleDeleteFeedback = useCallback((id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#019EA9',
      confirmButtonText: 'Yes',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setFeedback((prev) => prev.filter((item) => item.id !== id));
        Swal.fire({
          title: 'Deleted!',
          text: 'Your feedback has been deleted.',
          icon: 'success',
        });
      }
    });
  }, []);

  const handleAddLikes = useCallback((id) => {
    setFeedback((prev) =>
      prev.map((item) => (item.id === id ? { ...item, likes: item.likes + 1 } : item)),
    );
  }, []);

  return {
    feedback,
    handleAddFeedback,
    handleDeleteFeedback,
    handleAddLikes,
  };
};
