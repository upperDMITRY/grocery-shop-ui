import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import ResultsCount from '../../../components/adminPanel/ResultsCount';
import { useProductsFilters } from '../../../hooks/useProductsFilters';

const productsCountContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const ProductsCountContainer = () => {
  const token = useSelector((state) => state.auth.token);
  const filters = useSelector((state) => state.adminProducts.filters);
  const filteredProducts = useProductsFilters(filters, token);

  let text = '';

  if (
    filters.name === '' &&
    !filteredProducts.isLoading &&
    !filteredProducts.isError
  ) {
    text = `Total products: ${filteredProducts.data?.totalElements}`;
  } else {
    if (filteredProducts.isLoading) {
      text = 'Searching...';
    }

    if (filteredProducts.isError) {
      if (filteredProducts.error.message === 'Jwt is invalid') {
        text = 'You are not logged in as administrator';
      } else {
        text = 'Something went wrong...';
      }
    }

    if (filteredProducts.isSuccess) {
      const productsCount = filteredProducts.data?.totalElements;
      if (productsCount === 0) {
        text = 'Nothing found';
      } else if (productsCount === 1) {
        text = 'Found 1 product';
      } else {
        text = `Found ${productsCount} products`;
      }
    }
  }

  return (
    <Box sx={productsCountContainerStyle}>
      <ResultsCount text={text} />
    </Box>
  );
};

export default ProductsCountContainer;
