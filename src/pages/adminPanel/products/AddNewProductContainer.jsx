import { useEffect } from 'react';
import ProductForm from '../../../components/adminPanel/products/editAndAddNewProduct/ProductForm';
import AdminProductsErrorAlert from './AdminProductsErrorAlert';

const AddNewProductContainer = ({ setActive }) => {
  useEffect(() => {
    setActive('products');
  }, [setActive]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

  return (
    <>
      <AdminProductsErrorAlert />
      <ProductForm />
    </>
  );
};
export default AddNewProductContainer;
