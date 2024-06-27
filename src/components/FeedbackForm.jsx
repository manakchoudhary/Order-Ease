import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Textarea, VStack, Alert, AlertIcon } from '@chakra-ui/react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!feedback) {
      setError('Please provide your feedback.');
      return;
    }

    setIsLoading(true);

    try {
      if (!currentUser) {
        throw new Error('User is not authenticated');
      }

      await addDoc(collection(db, 'feedback'), {
        feedback,
        userId: currentUser.uid,
        timestamp: new Date(),
      });

      setFeedback('');
      setError('');
      alert('Feedback submitted successfully');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setError('Error submitting feedback. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          {error && (
            <Alert status="error" variant="subtle">
              <AlertIcon />
              {error}
            </Alert>
          )}
          <FormControl id="feedback" isRequired>
            <FormLabel>Feedback</FormLabel>
            <Textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="teal" isLoading={isLoading}>
            Submit Feedback
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default FeedbackForm;
