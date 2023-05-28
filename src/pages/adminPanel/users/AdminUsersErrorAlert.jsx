import { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import { setAdminUsersError } from '../../../redux/slices/adminUsers';

import { useSelector, useDispatch } from 'react-redux';

const AddNewUserErrorAlert = () => {
  const adminUsersError = useSelector(
    (state) => state.adminUsers.adminUsersError
  );
  const dispatch = useDispatch();

  const [open, setOpen] = useState(!!adminUsersError);

  useEffect(() => setOpen(!!adminUsersError), [adminUsersError]);

  const handleClose = () => {
    setOpen(false);
    dispatch(setAdminUsersError(''));
  };

  return (
    <Dialog
      sx={{ marginLeft: '260px', '& .MuiDialog-paper': { minWidth: '224px' } }}
      open={open}
      onClose={handleClose}
    >
      <DialogContent>
        <DialogContentText>{adminUsersError}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewUserErrorAlert;
