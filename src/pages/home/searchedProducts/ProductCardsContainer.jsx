import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import ProductCard from '../../../components/allProducts/ProductCard';
import Spinner from '../../../components/common/Spinner';
import {useSearchProducts} from "../../../hooks/useSearchProducts";

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
function getParam() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('name')
}

const ProductCardsContainer = () => {
  const pageNumber = useSelector((state) => state.allProducts.pageNumber);

  const searchProducts = useSearchProducts(pageNumber, getParam());

  if (searchProducts.isLoading) {
    return <Spinner />;
  }

  if (searchProducts.isError) {
    return null;
  }

  return (
    <Box sx={productCardsContainerStyle}>
      {searchProducts.data?.content.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          numberOfElements={searchProducts.data?.numberOfElements}
        />
      ))}
    </Box>
  );
};

export default ProductCardsContainer;
