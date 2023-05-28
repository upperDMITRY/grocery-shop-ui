import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import ResultsCount from '../../../components/adminPanel/ResultsCount';
import { useUsersFilters } from '../../../hooks/useUsersFilters';

const usersCountContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const UsersCountContainer = () => {
  const token = useSelector((state) => state.auth.token);
  const filters = useSelector((state) => state.adminUsers.filters);
  const filteredUsers = useUsersFilters(filters, token);

  let text = '';

  if (
    filters.email === '' &&
    !filteredUsers.isLoading &&
    !filteredUsers.isError
  ) {
    text = `Total users: ${filteredUsers.data?.totalElements}`;
  } else {
    if (filteredUsers.isLoading) {
      text = 'Searching...';
    }

    if (filteredUsers.isError) {
      if (filteredUsers.error.message === 'Jwt is invalid') {
        text = 'You are not logged in as administrator';
      } else {
        text = 'Something went wrong...';
      }
    }

    if (filteredUsers.isSuccess) {
      const usersCount = filteredUsers.data?.totalElements;
      if (usersCount === 0) {
        text = 'Nothing found';
      } else if (usersCount === 1) {
        text = 'Found 1 user';
      } else {
        text = `Found ${usersCount} users`;
      }
    }
  }

  return (
    <Box sx={usersCountContainerStyle}>
      <ResultsCount text={text} />
    </Box>
  );
};

export default UsersCountContainer;
