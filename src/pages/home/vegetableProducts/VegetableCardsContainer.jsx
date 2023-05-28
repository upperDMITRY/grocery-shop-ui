import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { useCategoryProducts } from '../../../hooks/useCategoryProducts';
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

const VegetableCardsContainer = () => {
  const pageNumber = useSelector((state) => state.allProducts.pageNumber);

  const vegetableProducts = useCategoryProducts(pageNumber, "vegetable");

  if (vegetableProducts.isLoading) {
    return <Spinner />;
  }

  if (vegetableProducts.isError) {
    return null;
  }

  return (
    <Box sx={productCardsContainerStyle}>
      {vegetableProducts.data?.content.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          numberOfElements={vegetableProducts.data?.numberOfElements}
        />
      ))}
    </Box>
  );
};

export default VegetableCardsContainer;
