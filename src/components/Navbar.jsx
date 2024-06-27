// src/components/Navbar.jsx
import React from 'react';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/auth');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg" color="white">
          Food App
        </Heading>
        <Flex alignItems="center">
          {currentUser ? (
            <Button onClick={handleLogout} colorScheme="teal" variant="outline">
              Log Out
            </Button>
          ) : (
            <>
              <Button onClick={() => navigate('/auth')} colorScheme="teal" variant="outline">
                Log In
              </Button>
              <Button onClick={() => navigate('/auth')} ml={4} colorScheme="teal" variant="solid">
                Sign Up
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
