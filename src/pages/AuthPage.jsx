// src/pages/AuthPage.jsx
import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLogin, setIsLogin] = React.useState(true);
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password);
      }
      navigate('/');
    } catch (error) {
      console.error(error);
      setError('Failed to authenticate');
    }

    setIsLoading(false);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" w="100%" maxW="400px" mx="auto" mt={8}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          {error && <Box color="red.500">{error}</Box>}
          <Button type="submit" colorScheme="teal" isLoading={isLoading}>
            {isLogin ? 'Log In' : 'Sign Up'}
          </Button>
          <Button variant="link" onClick={() => setIsLogin((prev) => !prev)}>
            {isLogin ? 'Create an account' : 'Already have an account? Log in'}
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default AuthPage;
