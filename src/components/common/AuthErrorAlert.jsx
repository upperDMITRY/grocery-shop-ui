import { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import { setError } from '../../redux/slices/authSlice';
import { useSelector, useDispatch } from 'react-redux';

const LoginErrorAlert = () => {
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(!!error);

  useEffect(() => setOpen(!!error), [error]);

  const handleClose = () => {
    setOpen(false);
    dispatch(setError(null));
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {error}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginErrorAlert;
