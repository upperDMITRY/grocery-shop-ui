import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import {
  setEmailError,
  setPasswordError,
  setDisabledSaveButton,
  setAdminUsersError,
} from '../../../../redux/slices/adminUsers';
import Header from './Header';
import Email from './Email';
import Password from './Password';
import Role from './Role';
import Status from './Status';
import { useMutationSaveUser } from '../../../../hooks/useMutationSaveUser';

const userFormContainerStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  gap: 4,
  paddingLeft: 4,
  paddingRight: 4,
  paddingTop: 2,
  maxWidth: 616,
  minWidth: 288,
};

const container3Style = { display: 'flex', gap: 3, flexGrow: 1 };

const buttonsContainerStyle = {
  display: 'flex',
  paddingBottom: '32px',
  paddingTop: '8px',
  marginLeft: '-10px',
};

const buttonStyle = {
  margin: '0 10px',
};

const EMAIL_REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

// eslint-disable-next-line
const PASSWORD_REGEX = /^[a-zA-Z0-9!@#$%^&*()_+~`\-=\\\/|[\]{};:'",<.>?]*$/;

const UserForm = ({ newUser }) => {
  const dispatch = useDispatch();

  const goBack = () => {
    history.goBack();
  };

  const onSaveSuccess = () => {
    goBack();
  };

  const onSaveError = (err) => {
    dispatch(setAdminUsersError(err));
  };

  const mutationSaveUser = useMutationSaveUser(onSaveSuccess, onSaveError);

  const history = useHistory();

  const token = useSelector((state) => state.auth.token);
  const email = useSelector((state) => state.adminUsers.email);
  const password = useSelector((state) => state.adminUsers.password);
  const role = useSelector((state) => state.adminUsers.role);
  const status = useSelector((state) => state.adminUsers.status);

  const disabledSaveButton = useSelector(
    (state) => state.adminUsers.disabledSaveButton
  );

  const emailRef = useRef();

  useEffect(() => {
    if (emailRef) {
      emailRef.current?.children[0].focus();
    }

    dispatch(setEmailError(''));
    dispatch(setPasswordError(''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (email.trim() && password.trim()) {
      dispatch(setDisabledSaveButton(false));
    } else {
      dispatch(setDisabledSaveButton(true));
    }
  }, [dispatch, email, password]);

  const saveUser = async (e) => {
    if (!EMAIL_REGEX.test(email)) {
      dispatch(setEmailError('Please provide correct e-mail address'));
      return;
    }

    if (email.length < 5 || email.length > 35) {
      dispatch(
        setEmailError(
          'Email address must be at least 5 characters long, maximum 35 characters long'
        )
      );
      return;
    }

    if (!PASSWORD_REGEX.test(password)) {
      dispatch(
        setPasswordError(
          'Password can only contain english letters, numbers and special characters, and must be at least 5 characters long, maximum 10 characters long'
        )
      );
      return;
    }

    if (password.length < 5 || password.length > 10) {
      dispatch(
        setPasswordError(
          'Password must be at least 5 characters long, maximum 10 characters long'
        )
      );
      return;
    }

    const user = {
      email: email.toLowerCase(),
      password,
      role,
      status,
    };

    mutationSaveUser.mutate([newUser ? 'post' : 'put', user, token]);
  };

  return (
    <Box sx={userFormContainerStyle}>
      <Header newUser={newUser} />
      <Email ref={emailRef} newUser={newUser} />
      <Password newUser={newUser} />
      <Box sx={container3Style}>
        <Role />
        <Status />
      </Box>
      <Box sx={buttonsContainerStyle}>
        <Button sx={buttonStyle} variant="outlined" onClick={goBack}>
          Cancel
        </Button>
        <Button
          sx={buttonStyle}
          variant="outlined"
          onClick={saveUser}
          disabled={disabledSaveButton}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default UserForm;
