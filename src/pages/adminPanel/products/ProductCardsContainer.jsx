import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { useProductsFilters } from '../../../hooks/useProductsFilters';
import ProductCard from '../../../components/adminPanel/products/ProductCard';
import Spinner from '../../../components/common/Spinner';

const productCardsContainerStyle = {
  width: '100%',
  display: 'grid',
  '@media (max-width: 1049px)': {
    gridTemplateColumns: 'auto',
  },
  '@media (min-width: 1050px)': {
    gridTemplateColumns: 'fit-content(336px) fit-content(336px)',
  },
  '@media (min-width: 1420px)': {
    gridTemplateColumns:
      'fit-content(336px) fit-content(336px) fit-content(336px)',
  },
  justifyContent: 'center',
  gridGap: '32px',
  padding: '32px',
  paddingBottom: 1,
};

const ProductCardsContainer = () => {
  const token = useSelector((state) => state.auth.token);
  const filters = useSelector((state) => state.adminProducts.filters);

  const filteredProducts = useProductsFilters(filters, token);

  if (filteredProducts.isLoading) {
    return <Spinner />;
  }

  if (filteredProducts.isError) {
    return null;
  }

  return (
    <Box sx={productCardsContainerStyle}>
      {filteredProducts.data?.content.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          numberOfElements={filteredProducts.data?.numberOfElements}
        />
      ))}
    </Box>
  );
};

export default ProductCardsContainer;
