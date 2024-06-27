// src/components/Signup.jsx
import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';

const Signup = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signup(email, password);
      onSuccess(); // Callback to handle successful signup
    } catch (error) {
      console.error('Signup error:', error.message);
      setError('Failed to sign up. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <VStack as="form" spacing={4} onSubmit={handleSubmit}>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button type="submit" colorScheme="teal" isLoading={loading}>
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
