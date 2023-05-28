import Box from '@mui/system/Box';
import LogoContainer from './LogoContainer';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavMenu from './NavMenu';
import MenuButton from '../../../components/home/header/MenuButton';
import NavIconLinksContainer from './NavIconLinksContainer';

const navBarContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  paddingTop: 3,
  paddingLeft: { xs: 4, lg: 10 },
  paddingRight: { xs: 4, lg: 10 },
  rowGap: 2,
  minHeight: 80,
};

const NavBarContainer = () => {
  return (
    <Box sx={navBarContainerStyle}>
      <LogoContainer />

      {useMediaQuery('(max-width:1279px)') ? <MenuButton /> : <NavMenu />}

      <NavIconLinksContainer />
    </Box>
  );
};

export default NavBarContainer;
