import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFilters,
  setOpenDialogRemoveUser,
  setAdminUsersError,
} from '../../../redux/slices/adminUsers';
import { useUsersFilters } from '../../../hooks/useUsersFilters';
import { useMutationRemoveUser } from '../../../hooks/useMutationRemoveUser';

const dialogStyle = {
  paddingLeft: '260px',
  '& .MuiPaper-root': {
    borderRadius: 2,
    minWidth: '200px',
    maxWidth: '600px',
  },
};

const dialogActionsStyle = {
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '20px',
  paddingTop: 0,
};

const buttonStyle = {
  padding: '4px 8px',
  margin: '0 10px',
};

const DialogRemoveUser = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const filters = useSelector((state) => state.adminUsers.filters);

  const openDialogRemoveUser = useSelector(
    (state) => state.adminUsers.openDialogRemoveUser
  );

  const removingUser = useSelector((state) => state.adminUsers.removingUser);

  const filteredUsers = useUsersFilters(filters, token);

  const numberOfElements = useSelector(
    (state) => state.adminUsers.numberOfElements
  );

  const pageNumber = useSelector(
    (state) => state.adminUsers.filters.pageNumber
  );

  const onRemoveSuccess = () => {
    dispatch(setOpenDialogRemoveUser(false));

    if (numberOfElements === 1 && pageNumber > 1) {
      dispatch(setFilters({ pageNumber: pageNumber - 1 }));
    }

    filteredUsers.refetch();
  };

  const onRemoveError = (err) => {
    dispatch(setAdminUsersError(err));
  };

  const mutationRemoveUser = useMutationRemoveUser(
    onRemoveSuccess,
    onRemoveError
  );

  const handleRemoveUser = async () => {
    mutationRemoveUser.mutate([removingUser, token]);
  };

  return (
    <Dialog
      sx={dialogStyle}
      open={openDialogRemoveUser}
      onClose={() => {
        dispatch(setOpenDialogRemoveUser(false));
      }}
      disableScrollLock
    >
      <DialogContent>
        <DialogContentText align="center">
          Remove user with email
          <br />
          <b>{removingUser.email}</b>
          <br />
          from the database?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={dialogActionsStyle}>
        <Button
          sx={buttonStyle}
          variant="outlined"
          size="small"
          onClick={handleRemoveUser}
        >
          Yes
        </Button>
        <Button
          sx={buttonStyle}
          variant="outlined"
          size="small"
          onClick={() => {
            dispatch(setOpenDialogRemoveUser(false));
          }}
          autoFocus
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogRemoveUser;
