import { TextField } from '@mui/material';

const CheckoutInput = ({
  placeholder,
  type,
  autoFocus,
  value,
  error,
  handleChange,
  name,
}) => {
  return (
    <TextField
      variant="outlined"
      name={name}
      autoFocus={autoFocus}
      size="small"
      fullWidth={true}
      placeholder={placeholder}
      onChange={handleChange}
      required={true}
      type={type}
      value={value}
      helperText={error}
      error={Boolean(error)}
      sx={{
        '& label.Mui-focused, & label.MuiFormLabel-filled': {
          transform: 'translate(20px, -9px) scale(0.75)',
        },
        '& .MuiOutlinedInput-root': {
          backgroundColor: 'white',
          fontFamily: 'Open Sans',
          borderRadius: '5px',
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
          padding: '11px 10px 11px 10px',
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

export default CheckoutInput;
