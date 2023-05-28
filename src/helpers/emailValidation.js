export const emailValidation = (state, setState) => {
  const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  if (state.email.trim() === '') {
    setState({ ...state, errorEmail: 'Please enter e-mail address' });
    return false;
  }

  if (!regexEmail.test(state.email)) {
    setState({
      ...state,
      errorEmail: 'Please provide correct e-mail address',
    });
    return false;
  }

  if (state.email.length < 5 || state.email.length > 35) {
    setState({
      ...state,
      errorEmail:
        'Email address must be at least 5 characters long, maximum 35 characters long',
    });
    return false;
  }

  return true;
};
