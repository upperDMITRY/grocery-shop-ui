import { useEffect } from 'react';
import { Box } from '@mui/material';
import UsersCountContainer from './UsersCountContainer';
import UserCardsContainer from './UserCardsContainer';
import PaginationContainer from './PaginationContainer';
import InputSearch from '../../../components/adminPanel/users/InputSearch';
import AddNewUserButton from '../../../components/adminPanel/users/AddNewUserButton';
import DialogRemoveUser from '../../../components/adminPanel/users/DialogRemoveUser';
import PanelTitle from '../../../components/adminPanel/dashboard/PanelTitle';
import AdminUsersErrorAlert from './AdminUsersErrorAlert';

const searchAndAddNewUserButtonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: 8,
  padding: 4,
  flexWrap: 'wrap',
  rowGap: 4,
};

const UsersContainer = ({ setActive, active }) => {
  useEffect(() => {
    setActive('users');
  }, [setActive]);
  return (
    <>
      <AdminUsersErrorAlert />

      <DialogRemoveUser />

      <PanelTitle title="Users" icon={active} />

      <Box sx={searchAndAddNewUserButtonContainerStyle}>
        <InputSearch />
        <AddNewUserButton />
      </Box>

      <UsersCountContainer />

      <UserCardsContainer />

      <PaginationContainer />
    </>
  );
};

export default UsersContainer;
