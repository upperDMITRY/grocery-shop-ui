import { Typography } from '@mui/material';

const ChartTitle = ({ title }) => {
  return (
    <Typography variant="h5" sx={{ textAlign: 'center', marginTop: '15px' }}>
      {title}
    </Typography>
  );
};

export default ChartTitle;
