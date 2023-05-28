import Box from '@mui/system/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

const logoStyle = { maxWidth: 148 };

const LogoContainer = () => {
  const logoContainerStyle = {
    display: 'flex',
    flexGrow: useMediaQuery('(max-width:1279px)') ? 1 : 0,
  };

  return (
    <Box sx={logoContainerStyle}>
      <Link to="/">
        <Box component="img" alt="Groca logo" src={logo} sx={logoStyle} />
      </Link>
      <Box sx={{ width: 32 }}></Box>
    </Box>
  );
};

export default LogoContainer;
