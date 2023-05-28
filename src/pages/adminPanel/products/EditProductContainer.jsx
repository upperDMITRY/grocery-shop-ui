import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useProduct } from '../../../hooks/useProduct';
import Spinner from '../../../components/common/Spinner';
import {
  setEditingProduct,
  setImageError,
  setImageLoaded,
} from '../../../redux/slices/adminProducts';
import ProductForm from '../../../components/adminPanel/products/editAndAddNewProduct/ProductForm';

const EditProductContainer = ({ setActive }) => {
  const dispatch = useDispatch();

  const { productId } = useParams();
  const product = useProduct(productId);

  useEffect(() => {
    setActive('products');
  }, [setActive]);

  useEffect(() => {
    dispatch(setImageLoaded(false));
    dispatch(setImageError(false));
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

  if (product.isLoading) {
    return <Spinner />;
  }

  if (product.isError) {
    return null;
  }

  dispatch(setEditingProduct(product.data));

  return <ProductForm />;
};

export default EditProductContainer;
