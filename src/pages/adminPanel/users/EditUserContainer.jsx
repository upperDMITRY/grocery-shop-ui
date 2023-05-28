import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '../../../hooks/useUser';
import Spinner from '../../../components/common/Spinner';
import { setEditingUser } from '../../../redux/slices/adminUsers';
import UserForm from '../../../components/adminPanel/users/editAndAddNewUser/UserForm';

const EditUserContainer = ({ setActive, newUser }) => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  const { userEmail } = useParams();
  const user = useUser(userEmail, token);

  useEffect(() => {
    setActive('users');
  }, [setActive]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

  if (user.isLoading) {
    return <Spinner />;
  }

  if (user.isError) {
    return null;
  }

  dispatch(setEditingUser(user.data?.content[0]));

  return <UserForm newUser={newUser} />;
};

export default EditUserContainer;
