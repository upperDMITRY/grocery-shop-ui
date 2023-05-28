import { Divider, Box } from '@mui/material';
import Main from '../../components/checkout/Main';
import Sidebar from '../../components/checkout/Sidebar';

const containerStyle = {
  maxWidth: '100%',
  margin: '0 auto',
};

const wrapperStyle = {
  display: 'flex',
  backgroundColor: '#fafafa',
  justifyContent: 'space-between',
};

const CheckoutContainer = () => {
  return (
    <Box sx={containerStyle}>
      <Box sx={wrapperStyle}>
        <Main />
        <Divider orientation="vertical" flexItem />
        <Sidebar />
      </Box>
    </Box>
  );
};

export default CheckoutContainer;
