export const anyString255Validation = (
  state,
  setState,
  stateName,
  stateNameError
) => {
  const stringMatch = state[stateName];

  if (stringMatch.trim() === '') {
    setState({ ...state, [stateNameError]: 'Please enter information.' });
    return false;
  }

  if (stringMatch.length < 1 || stringMatch.length > 255) {
    setState({
      ...state,
      [stateNameError]:
        'Your information must be at least 1 characters long, maximum 255 characters long.',
    });
    return false;
  }

  return true;
};
