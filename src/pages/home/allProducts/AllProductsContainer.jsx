import GreenPageHeader from '../../../components/allProducts/GreenPageHeader';
import ProductCardsContainer from './ProductCardsContainer';
import PaginationContainer from './PaginationContainer';

const AllProductsContainer = () => {
  return (
    <>
      <GreenPageHeader title="All products" marginTop="50px" />
      <ProductCardsContainer />
      <PaginationContainer />
    </>
  );
};

export default AllProductsContainer;
