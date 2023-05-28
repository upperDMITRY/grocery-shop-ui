import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { useAllProducts } from '../../../hooks/useAllProducts';
import ProductCard from '../../../components/allProducts/ProductCard';
import Spinner from '../../../components/common/Spinner';

const productCardsContainerStyle = {
  width: '100%',
  display: 'grid',
  '@media (max-width: 799px)': {
    gridTemplateColumns: 'auto',
  },
  '@media (min-width: 800px)': {
    gridTemplateColumns: 'fit-content(336px) fit-content(336px)',
  },
  '@media (min-width: 1200px)': {
    gridTemplateColumns:
      'fit-content(336px) fit-content(336px) fit-content(336px)',
  },
  justifyContent: 'center',
  gridGap: '32px',
  padding: '32px',
  paddingTop: 8,
  paddingBottom: 4,
  minWidth: '320px',
};

const ProductCardsContainer = () => {
  const pageNumber = useSelector((state) => state.allProducts.pageNumber);

  const allProducts = useAllProducts(pageNumber);

  if (allProducts.isLoading) {
    return <Spinner />;
  }

  if (allProducts.isError) {
    return null;
  }

  return (
    <Box sx={productCardsContainerStyle}>
      {allProducts.data?.content.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          numberOfElements={allProducts.data?.numberOfElements}
        />
      ))}
    </Box>
  );
};

export default ProductCardsContainer;
