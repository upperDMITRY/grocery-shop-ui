import Box from '@mui/system/Box';
import TopBarLink from '../../../components/home/header/TopBarLink';
import useMediaQuery from '@mui/material/useMediaQuery';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import TopBarDivider from '../../../components/home/header/TopBarDivider';

const textLinksContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 2,
};

const textLinkWithIconContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const textLinkStyle = {
  fontSize: 14,
  paddingLeft: { xs: 1 },
  paddingRight: { xs: 1 },
  fontFamily: 'Open Sans',
};

const iconStyle = {
  fontSize: 16,
};

const email = (
  <Box sx={textLinkWithIconContainerStyle}>
    <EmailIcon sx={iconStyle} />
    <Typography sx={textLinkStyle}>grocery@example.com</Typography>
  </Box>
);
const tel = (
  <Box sx={textLinkWithIconContainerStyle}>
    <PhoneIcon sx={iconStyle} />
    <Typography sx={textLinkStyle}>+373 - 123456789</Typography>
  </Box>
);

const TopBarTextLinksContainer = () => {
  return (
    <Box sx={textLinksContainerStyle}>
      <TopBarLink link={tel} to="tel:+373 - 123456789" />
      {useMediaQuery('(max-width:360px)') ? null : <TopBarDivider />}
      <TopBarLink link={email} to="mailto:grocery@example.com" />
    </Box>
  );
};

export default TopBarTextLinksContainer;
