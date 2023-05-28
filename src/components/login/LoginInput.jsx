import { TextField } from '@mui/material';

const LoginInput = ({ label, type, autoFocus, value, error, handleChange }) => {
  return (
    <TextField
      name={type}
      error={Boolean(error)}
      helperText={error}
      label={label}
      autoFocus={autoFocus}
      type={type}
      value={value}
      onChange={handleChange}
      sx={{
        borderRadius: '50px',
        '& label.MuiInputLabel-root': {
          transition: 'color 0.3s ease, transform 0.3s ease',
          transform: 'translate(20px, 13px) scale(1)',
          fontFamily: 'Open Sans',
        },
        '& label.Mui-focused, & label.MuiFormLabel-filled': {
          transform: 'translate(20px, -9px) scale(0.75)',
        },
        '& .MuiOutlinedInput-root': {
          backgroundColor: 'white',
          fontFamily: 'Open Sans',
          borderRadius: '50px',
          '& fieldset': {
            transition: 'all 0.3s ease',
            borderColor: '#eee',
          },
          '& fieldset.MuiOutlinedInput-notchedOutline': {
            padding: '0 14px',
          },
          '& .MuiFormLabel-filled fieldset.MuiOutlinedInput-notchedOutline': {},
          '&:hover fieldset': {
            borderColor: '#eee',
          },
          '&.Mui-focused fieldset': {
            transition: 'all 0.3s ease',
            borderColor: 'primary.main',
            borderWidth: '1px',
          },
        },
        '& .MuiOutlinedInput-input': {
          padding: '14px 10px 13px 20px',
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0px 1000px #fff inset',
          },
          '&:-webkit-autofill::first-line': {
            font: "16px 'Open Sans', sans-serif",
          },
        },
      }}
    />
  );
};

export default LoginInput;
