import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const DishCard = ({ dish }) => {
  // Ensure dish and dish.image exist before rendering
  if (!dish || !dish.image || !dish.name || !dish.price) {
    return null; // Or render a placeholder card or error message
  }

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={dish.image} alt={dish.name} />
      <Box p="6">
        <Text fontWeight="bold">{dish.name}</Text>
        <Text>${dish.price.toFixed(2)}</Text>
      </Box>
    </Box>
  );
};

export default DishCard;
