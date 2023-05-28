import { Typography, Box } from '@mui/material';
import CheckoutInput from './CheckoutInput';

const ContactInformation = ({ value, error, handleChange }) => {
  return (
    <Box>
      <Typography sx={{ fontSize: '17px', marginBottom: '1.5em' }}>
        Contact inforamtion
      </Typography>
      <CheckoutInput
        value={value}
        error={error}
        helperText={error}
        type="email"
        name="email"
        placeholder="Email"
        autoFocus={true}
        handleChange={handleChange}
      />
    </Box>
  );
};

export default ContactInformation;
