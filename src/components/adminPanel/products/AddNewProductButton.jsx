import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CommonButton from '../../common/buttons/CommonButton';
import { setEditingProduct } from '../../../redux/slices/adminProducts';

const NEW_PRODUCT = {
  id: null,
  description: '',
  name: '',
  price: '',
  rating: '',
  sizeType: 'KILOS',
  sizes: [1, 2, 3],
  image: '',
};

const AddNewProductButton = () => {
  const dispatch = useDispatch();

  return (
    <Link
      to={`/admin/products/addNewProduct`}
      style={{ textDecoration: 'none' }}
    >
      <CommonButton
        fontSize="16px"
        width="180px"
        height="50px"
        onClick={() => {
          dispatch(setEditingProduct(NEW_PRODUCT));
        }}
      >
        Add new product
      </CommonButton>
    </Link>
  );
};

export default AddNewProductButton;
