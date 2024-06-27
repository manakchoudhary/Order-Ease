import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select, VStack } from '@chakra-ui/react';
import { dishes } from '../data/dummyData';
import PaymentForm from './PaymentForm';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';

const OrderForm = ({ onPlaceOrder }) => {
  const [tableNumber, setTableNumber] = useState('');
  const [selectedDish, setSelectedDish] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isPayment, setIsPayment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tableNumber || !selectedDish) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsPayment(true);
  };

  const handlePayment = async (paymentDetails) => {
    setIsLoading(true);

    try {
      if (!currentUser) {
        throw new Error('User is not authenticated');
      }

      const orderData = {
        tableNumber,
        dish: selectedDish,
        quantity: parseInt(quantity),
        paymentDetails,
        userId: currentUser.uid,
        timestamp: new Date(),
      };

      const docRef = await addDoc(collection(db, 'orders'), orderData);
      orderData.id = docRef.id;

      onPlaceOrder(orderData);
      setIsPayment(false);
      setIsLoading(false);

      alert('Order placed successfully');
    } catch (error) {
      console.error('Error placing order:', error);
      setIsLoading(false);
      alert('Error placing order');
    }
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      {!isPayment ? (
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="tableNumber" isRequired>
              <FormLabel>Table Number</FormLabel>
              <Input type="text" value={tableNumber} onChange={(e) => setTableNumber(e.target.value)} />
            </FormControl>
            <FormControl id="dish" isRequired>
              <FormLabel>Select Dish</FormLabel>
              <Select placeholder="Select dish" value={selectedDish} onChange={(e) => setSelectedDish(e.target.value)}>
                {dishes.map((dish) => (
                  <option key={dish.id} value={dish.name}>
                    {dish.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl id="quantity" isRequired>
              <FormLabel>Quantity</FormLabel>
              <Input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min={1} />
            </FormControl>
            <Button type="submit" colorScheme="teal" isLoading={isLoading}>
              Next
            </Button>
          </VStack>
        </form>
      ) : (
        <PaymentForm onPayment={handlePayment} />
      )}
    </Box>
  );
};

export default OrderForm;
