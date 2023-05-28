import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

const headerContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
};

const headerStyle = {
  typography: 'h5',
  color: 'primary.main',
  fontWeight: 600,
};

const idStyle = {
  typography: 'h5',
  color: 'grey40.main',
  '@media (max-width: 600px)': {
    fontSize: '18px',
  },
};

const Id = memo(() => {
  const id = useSelector((state) => state.adminProducts.id);

  return (
    <Box sx={headerContainerStyle}>
      <Box sx={headerStyle}>
        {id === null ? 'Add new product' : 'Edit product'}
      </Box>
      {id && <Box sx={idStyle}>ID: {id}</Box>}
    </Box>
  );
});

export default Id;
