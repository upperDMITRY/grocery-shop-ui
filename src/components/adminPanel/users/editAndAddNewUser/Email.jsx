import { forwardRef, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  OutlinedInput,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@mui/material';
import { setEmail, setEmailError } from '../../../../redux/slices/adminUsers';

const Email = memo(
  forwardRef((props, ref) => {
    const { newUser } = props;

    const dispatch = useDispatch();

    const email = useSelector((state) => state.adminUsers.email);
    const emailError = useSelector((state) => state.adminUsers.emailError);

    const disabledSaveButton = useSelector(
      (state) => state.adminUsers.disabledSaveButton
    );

    const handleEmailChange = (e) => {
      dispatch(setEmailError(''));
      if (email.length < 256) {
        dispatch(setEmail(e.target.value.trim().slice(0, 255)));
      }
    };

    return (
      <FormControl fullWidth>
        <InputLabel shrink>Email</InputLabel>
        <OutlinedInput
          error={emailError !== ''}
          ref={ref}
          autoFocus
          notched
          placeholder={disabledSaveButton ? 'Enter user email' : null}
          label="Email"
          value={email}
          onChange={handleEmailChange}
          disabled={!newUser}
        />
        {emailError && <FormHelperText error>{emailError}</FormHelperText>}
      </FormControl>
    );
  })
);

export default Email;
