import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CommonButton from '../../common/buttons/CommonButton';
import { setEditingUser } from '../../../redux/slices/adminUsers';

const NEW_USER = {
  email: '',
  password: '',
  role: 'USER',
  status: 'ACTIVE',
  newUser: true,
};

const AddNewUserButton = () => {
  const dispatch = useDispatch();

  return (
    <Link to={`/admin/users/addNewUser`} style={{ textDecoration: 'none' }}>
      <CommonButton
        fontSize="16px"
        width="180px"
        height="50px"
        onClick={() => {
          dispatch(setEditingUser(NEW_USER));
        }}
      >
        Add new user
      </CommonButton>
    </Link>
  );
};

export default AddNewUserButton;
