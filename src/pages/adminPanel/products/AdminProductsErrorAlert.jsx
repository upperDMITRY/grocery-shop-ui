import { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import { setAdminProductsError } from '../../../redux/slices/adminProducts';

import { useSelector, useDispatch } from 'react-redux';

const AdminProductsErrorAlert = () => {
  const adminProductsError = useSelector(
    (state) => state.adminProducts.adminProductsError
  );
  const dispatch = useDispatch();

  const [open, setOpen] = useState(!!adminProductsError);

  useEffect(() => setOpen(!!adminProductsError), [adminProductsError]);

  const handleClose = () => {
    setOpen(false);
    dispatch(setAdminProductsError(''));
  };

  return (
    <Dialog
      sx={{ marginLeft: '260px', '& .MuiDialog-paper': { minWidth: '224px' } }}
      open={open}
      onClose={handleClose}
    >
      <DialogContent>
        <DialogContentText>{adminProductsError}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AdminProductsErrorAlert;
