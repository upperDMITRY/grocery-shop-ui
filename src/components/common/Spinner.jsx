import { Box, CircularProgress } from '@mui/material';

const Spinner = ({ margin = 4, size }) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        margin,
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
};

export default Spinner;
