import { Typography } from '@mui/material';

const DashboardError = ({ error }) => {
  return (
    <Typography
      variant="h3"
      color="red"
      sx={{ textAlign: 'center', marginTop: '50px' }}
    >
      {error}
    </Typography>
  );
};

export default DashboardError;
