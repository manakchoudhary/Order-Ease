// src/components/OrderHistory.jsx
import { useEffect, useState } from 'react';
import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      if (currentUser) {
        const q = query(collection(db, 'orders'), where('userId', '==', currentUser.uid));
        const querySnapshot = await getDocs(q);
        const fetchedOrders = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setOrders(fetchedOrders);
      }
    };

    fetchOrders();
  }, [currentUser]);

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" mt={8}>
      <Heading size="md" mb={4}>
        Order History
      </Heading>
      <List spacing={3}>
        {orders.map((order) => (
          <ListItem key={order.id} borderWidth="1px" borderRadius="lg" p={4}>
            <Text><strong>Table Number:</strong> {order.tableNumber}</Text>
            <Text><strong>Dish:</strong> {order.dish}</Text>
            <Text><strong>Quantity:</strong> {order.quantity}</Text>
            <Text><strong>Order Time:</strong> {order.timestamp.toDate().toLocaleString()}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default OrderHistory;
