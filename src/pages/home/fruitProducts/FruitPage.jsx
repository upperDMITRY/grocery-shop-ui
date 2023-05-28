import GreenPageHeader from '../../../components/allProducts/GreenPageHeader';
import ProductCardsContainer from './ProductCardsContainer';
import PaginationContainer from './PaginationContainer';
import HeaderContainer from "../header/HeaderContainer";

const FruitPage = () => {
  return (
    <>
      <HeaderContainer title="Fruits" />
      <GreenPageHeader title="Fruits" marginTop="50px" />
      <ProductCardsContainer />
      <PaginationContainer />
    </>
  );
};

export default FruitPage;
