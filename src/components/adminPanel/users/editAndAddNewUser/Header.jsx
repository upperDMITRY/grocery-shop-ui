import { memo } from 'react';
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

const Header = memo(({ newUser }) => {
  return (
    <Box sx={headerContainerStyle}>
      <Box sx={headerStyle}>{newUser ? 'Add new user' : 'Edit user'}</Box>
    </Box>
  );
});

export default Header;
