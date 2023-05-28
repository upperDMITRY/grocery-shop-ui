import Box from '@mui/system/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const menuButonContainerStyle = { display: 'flex' };

const MenuButton = () => {
  return (
    <Box sx={menuButonContainerStyle}>
      <IconButton size="large" edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default MenuButton;
