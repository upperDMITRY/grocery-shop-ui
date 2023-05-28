import { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  OutlinedInput,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@mui/material';
import {
  setPassword,
  setPasswordError,
} from '../../../../redux/slices/adminUsers';

const Password = memo(({ newUser }) => {
  const dispatch = useDispatch();

  const password = useSelector((state) => state.adminUsers.password);
  const passwordError = useSelector((state) => state.adminUsers.passwordError);

  useEffect(() => {
    if (!newUser) {
      dispatch(setPassword(''));
    }
    // eslint-disable-next-line
  }, []);

  const disabledSaveButton = useSelector(
    (state) => state.adminUsers.disabledSaveButton
  );

  const handlePasswordChange = (e) => {
    dispatch(setPasswordError(''));
    if (password.length < 256) {
      dispatch(setPassword(e.target.value.trim().slice(0, 255)));
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel shrink>Password</InputLabel>
      <OutlinedInput
        error={passwordError !== ''}
        autoFocus
        notched
        placeholder={disabledSaveButton ? 'Enter user password' : null}
        label="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      {passwordError && <FormHelperText error>{passwordError}</FormHelperText>}
    </FormControl>
  );
});

export default Password;
