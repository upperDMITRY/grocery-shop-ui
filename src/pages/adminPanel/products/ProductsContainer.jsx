import { useEffect } from 'react';
import { Box } from '@mui/material';
import ProductsCountContainer from './ProductsCountContainer';
import ProductCardsContainer from './ProductCardsContainer';
import PaginationContainer from './PaginationContainer';
import InputSearch from '../../../components/adminPanel/products/InputSearch';
import AddNewProductButton from '../../../components/adminPanel/products/AddNewProductButton';
import DialogRemoveProduct from '../../../components/adminPanel/products/DialogRemoveProduct';
import PanelTitle from '../../../components/adminPanel/dashboard/PanelTitle';
import AdminProductsErrorAlert from './AdminProductsErrorAlert';

const searchAndAddNewProductButtonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: 8,
  padding: 4,
  flexWrap: 'wrap',
  rowGap: 4,
};

const Products = ({ setActive, active }) => {
  useEffect(() => {
    setActive('products');
  }, [setActive]);

  return (
    <>
      <AdminProductsErrorAlert />

      <DialogRemoveProduct />

      <PanelTitle title={'Products'} icon={active} />

      <Box sx={searchAndAddNewProductButtonContainerStyle}>
        <InputSearch />
        <AddNewProductButton />
      </Box>

      <ProductsCountContainer />

      <ProductCardsContainer />

      <PaginationContainer />
    </>
  );
};

export default Products;
