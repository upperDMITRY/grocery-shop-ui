import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { useUsersFilters } from '../../../hooks/useUsersFilters';
import UserCard from '../../../components/adminPanel/users/UserCard';
import Spinner from '../../../components/common/Spinner';

const userCardsContainerStyle = {
  width: '100%',
  display: 'grid',
  '@media (max-width: 1179px)': {
    gridTemplateColumns: 'auto',
  },
  '@media (min-width: 1180px)': {
    gridTemplateColumns: 'fit-content(400px) fit-content(400px)',
  },
  justifyContent: 'center',
  gridGap: '32px',
  padding: '32px',
  paddingBottom: 1,
};

const UserCardsContainer = () => {
  const token = useSelector((state) => state.auth.token);
  const filters = useSelector((state) => state.adminUsers.filters);

  const filteredUsers = useUsersFilters(filters, token);

  if (filteredUsers.isLoading) {
    return <Spinner />;
  }

  if (filteredUsers.isError) {
    return null;
  }

  return (
    <Box sx={userCardsContainerStyle}>
      {filteredUsers.data?.content.map((user) => (
        <UserCard
          key={user.email}
          user={user}
          numberOfElements={filteredUsers.data?.numberOfElements}
        />
      ))}
    </Box>
  );
};

export default UserCardsContainer;
