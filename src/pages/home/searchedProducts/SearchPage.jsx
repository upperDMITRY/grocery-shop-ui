import GreenPageHeader from '../../../components/allProducts/GreenPageHeader';
import ProductCardsContainer from './ProductCardsContainer';
import PaginationContainer from './PaginationContainer';
import HeaderContainer from "../header/HeaderContainer";

const SearchPage = () => {
  return (
    <>
      <HeaderContainer title="All Categories" />
      <GreenPageHeader title="Search result" marginTop="50px" />
      <ProductCardsContainer />
      <PaginationContainer />
    </>
  );
};

export default SearchPage;
