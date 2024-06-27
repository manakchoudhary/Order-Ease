// src/pages/HomePage.jsx
import React from 'react';
import { Container, VStack } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import OrderForm from '../components/OrderForm';
import FeedbackForm from '../components/FeedbackForm';
import OrderHistory from '../components/OrderHistory';
import DishCard from '../components/DishCard';

const HomePage = () => {
  const handlePlaceOrder = (order) => {
    console.log('Order placed:', order);
  };

  return (
    <>
      <Navbar />
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8}>
          <DishCard />
          <OrderForm onPlaceOrder={handlePlaceOrder} />
          <FeedbackForm />
          <OrderHistory />
        </VStack>
      </Container>
    </>
  );
};

export default HomePage;
