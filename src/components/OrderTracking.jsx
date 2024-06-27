import { Box, Text } from '@chakra-ui/react';

const OrderTracking = ({ order }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Text>Order for Table: {order.tableNumber}</Text>
      <Text>Dish: {order.dish}</Text>
      <Text>Quantity: {order.quantity}</Text>
      <Text>Status: Preparing...</Text> {/* Dummy status */}
    </Box>
  );
};

export default OrderTracking;
