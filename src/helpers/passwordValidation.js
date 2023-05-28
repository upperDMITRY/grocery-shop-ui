export const passwordValidation = (state, setState) => {
  /* eslint-disable no-useless-escape */
  const regexPassword = /^[a-zA-Z0-9!@#$%^&*()_+~`\-=\\\/|[\]{};:'",<.>?]*$/;

  if (state.password.trim() === '') {
    setState({ ...state, errorPassword: 'Please enter password' });
    return false;
  }

  if (!regexPassword.test(state.password)) {
    setState({
      ...state,
      errorPassword:
        'Password can only contain english letters, numbers and special characters, and must be at least 5 characters long, maximum 10 characters long',
    });
    return false;
  }

  if (state.password.length < 5 || state.password.length > 10) {
    setState({
      ...state,
      errorPassword:
        'Password must be at least 5 characters long, maximum 10 characters long',
    });
    return false;
  }

  return true;
};
