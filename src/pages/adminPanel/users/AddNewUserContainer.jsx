import { useEffect } from 'react';
import UserForm from '../../../components/adminPanel/users/editAndAddNewUser/UserForm';
import AdminUsersErrorAlert from './AdminUsersErrorAlert';

const AddNewUserContainer = ({ setActive, newUser }) => {
  useEffect(() => {
    setActive('users');
  }, [setActive]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

  return (
    <>
      <AdminUsersErrorAlert />
      <UserForm newUser={newUser} />
    </>
  );
};
export default AddNewUserContainer;
