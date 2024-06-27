import { Box, Image, Text } from '@chakra-ui/react';

const OfferCard = ({ offer }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={offer.image} alt={offer.description} />
      <Box p="6">
        <Text>{offer.description}</Text>
      </Box>
    </Box>
  );
};

export default OfferCard;
