import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, Card, CardActions, CardContent, Button } from '@mui/material';
import {
  setNumberOfElements,
  setOpenDialogRemoveUser,
  setRemovingUser,
} from '../../../redux/slices/adminUsers';

const cardStyle = {
  borderRadius: 2,
  boxShadow: '0 5px 10px rgba(0,0,0,0.2)',
  '@media (max-width: 799.9px)': {
    width: '300px',
    minWidth: '300px',
  },
  '@media (min-width: 800px)': {
    width: '400px',
    minWidth: '400px',
  },
};

const cardContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 1.5,
  ':last-child': { paddingBottom: 1.5 },
  height: '100%',
};

const cardActionsStyle = {
  display: 'flex',
  gap: 2,
  padding: 0,
  paddingBottom: 1,
  marginTop: 3,
  '& a': {
    textDecoration: 'none',
  },
};

const cardButtonStyle = {
  padding: '4px 8px',
  textDecoration: 'none',
};

const UserCard = ({ user, numberOfElements }) => {
  const { email, role, status } = user;

  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    dispatch(setOpenDialogRemoveUser(true));
    dispatch(setRemovingUser({ email }));
    dispatch(setNumberOfElements(numberOfElements));
  };

  const emailStyle = {
    backgroundColor: role === 'ADMIN' ? 'primary.main' : 'grey40.main',
    color: 'common.white',
    margin: -1.5,
    padding: 1.5,
    typography: 'h5',
    fontSize: '1.3rem',
    fontWeight: 500,
    wordBreak: 'break-word',
    '@media (max-width: 799.9px)': {
      fontSize: '1.1rem',
    },
  };

  return (
    <Card sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Box sx={emailStyle}>{email}</Box>
        <Box>
          <Box sx={{ marginTop: 2.5 }}>
            <Box
              typography="body"
              sx={{
                display: 'flex',
                alignItems: 'baseline',
                color: 'grey60.main',
              }}
            >
              Role:
              <Box
                typography="h5"
                sx={{
                  fontWeight: role === 'ADMIN' ? 600 : 400,
                  color: role === 'ADMIN' ? 'primary.main' : 'common.black',
                  marginLeft: '23px',
                  '@media (max-width: 799.9px)': {
                    fontSize: '1.2rem',
                  },
                }}
              >
                {`${role.charAt(0).toUpperCase()}${role
                  .slice(1)
                  .toLowerCase()}`}
              </Box>
            </Box>
            <Box
              typography="body"
              sx={{
                display: 'flex',
                alignItems: 'baseline',
                color: 'grey60.main',
              }}
            >
              Status:
              <Box
                typography="h5"
                sx={{
                  fontWeight: 400,
                  color: status === 'ACTIVE' ? 'grey60.main' : 'secondary.main',
                  marginLeft: '8px',
                  '@media (max-width: 799.9px)': {
                    fontSize: '1.2rem',
                  },
                }}
              >
                {`${status.charAt(0).toUpperCase()}${status
                  .slice(1)
                  .toLowerCase()}`}
              </Box>
            </Box>
          </Box>
          <CardActions sx={cardActionsStyle}>
            <Button
              variant="outlined"
              sx={cardButtonStyle}
              size="small"
              onClick={handleDeleteUser}
            >
              Delete
            </Button>
            <Link to={`/admin/users/${email}`}>
              <Button variant="outlined" sx={cardButtonStyle} size="small">
                Edit
              </Button>
            </Link>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;
