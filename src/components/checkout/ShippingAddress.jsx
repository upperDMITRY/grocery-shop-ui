import { Typography, Box } from '@mui/material';
import CheckoutInput from './CheckoutInput';

const shippingTitle = {
  padding: '85px 0px 95px 0px',
  '@media (max-width: 750px)': {
    padding: '85px 0px 50px 0px',
  },
};

const shippingStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const firstAndLastNameStyles = {
  display: 'flex',
  gap: '12px',
  '@media (max-width: 750px)': {
    flexDirection: 'column',
  },
};

const ShippingAddress = ({ state, handleChange }) => {
  return (
    <Box sx={shippingTitle}>
      <Typography sx={{ fontSize: '17px', marginBottom: '1.5em' }}>
        Shipping address
      </Typography>

      <Box sx={shippingStyles}>
        <Box sx={firstAndLastNameStyles}>
          <CheckoutInput
            value={state.firstName}
            error={state.errorFirstName}
            helperText={state.errorFirstName}
            type="text"
            name="firstName"
            placeholder="First name"
            handleChange={handleChange}
          />
          <CheckoutInput
            value={state.lastName}
            error={state.errorLastName}
            helperText={state.errorFirstName}
            type="text"
            name="lastName"
            placeholder="Last name"
            handleChange={handleChange}
          />
        </Box>

        <CheckoutInput
          value={state.address}
          error={state.errorAddress}
          helperText={state.errorAddress}
          type="text"
          name="address"
          placeholder="Address"
          handleChange={handleChange}
        />
        <CheckoutInput
          value={state.apartment}
          error={state.errorApartment}
          helperText={state.errorApartment}
          type="text"
          name="apartment"
          placeholder="Nr. of apartment, suite, etc."
          handleChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default ShippingAddress;
