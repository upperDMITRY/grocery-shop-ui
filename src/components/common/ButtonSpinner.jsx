import { CircularProgress } from '@mui/material';

const spinnerStyle = {
  position: 'absolute',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const ButtonSpinner = () => {
  return <CircularProgress size={30} sx={spinnerStyle} />;
};

export default ButtonSpinner;
