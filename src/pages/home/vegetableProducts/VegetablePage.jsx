import GreenPageHeader from '../../../components/allProducts/GreenPageHeader';
import VegetableCardsContainer from './VegetableCardsContainer';
import PaginationContainer from './PaginationContainer';
import HeaderContainer from "../header/HeaderContainer";

const VegetablePage = () => {
  return (
    <>
      <HeaderContainer title="Vegetables" />
      <GreenPageHeader title="Vegetables" marginTop="50px" />
      <VegetableCardsContainer />
      <PaginationContainer />
    </>
  );
};

export default VegetablePage;
