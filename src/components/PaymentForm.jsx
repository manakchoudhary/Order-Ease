import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

const PaymentForm = ({ onPayment }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPayment({ cardNumber, expiryDate, cvv });
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="cardNumber" isRequired>
            <FormLabel>Card Number</FormLabel>
            <Input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
          </FormControl>
          <FormControl id="expiryDate" isRequired>
            <FormLabel>Expiry Date</FormLabel>
            <Input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
          </FormControl>
          <FormControl id="cvv" isRequired>
            <FormLabel>CVV</FormLabel>
            <Input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Pay Now
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default PaymentForm;
