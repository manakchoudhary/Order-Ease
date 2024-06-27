import { Input } from '@chakra-ui/react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Input
      placeholder="Search for a dish..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
