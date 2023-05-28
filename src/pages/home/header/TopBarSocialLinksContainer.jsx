import Box from '@mui/system/Box';
import TopBarLink from '../../../components/home/header/TopBarLink';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TopBarDivider from '../../../components/home/header/TopBarDivider';
import SelectCurrencyContainer from './SelectCurrencyContainer';
import useMediaQuery from '@mui/material/useMediaQuery';

const socialLinksContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  paddingLeft: 1,
  paddingRight: 0,
  gap: 5,
  rowGap: 2,
};

const socialLinkStyle = {
  fontSize: 16,
};

const twitterLink = <TwitterIcon sx={socialLinkStyle} />;
const facebookLink = <FacebookIcon sx={socialLinkStyle} />;
const googleLink = <GoogleIcon sx={socialLinkStyle} />;
const instagramLink = <InstagramIcon sx={socialLinkStyle} />;
const linkedInLink = <LinkedInIcon sx={socialLinkStyle} />;

const TopBarSocialLinksContainer = () => {
  return (
    <Box sx={socialLinksContainerStyle}>
      <TopBarLink link={twitterLink} to="https://twitter.com/" />
      <TopBarLink link={facebookLink} to="https://www.facebook.com/" />
      <TopBarLink link={googleLink} to="https://www.google.com/" />
      <TopBarLink link={instagramLink} to="https://www.instagram.com/" />
      <TopBarLink link={linkedInLink} to="https://www.linkedin.com/" />
      {useMediaQuery('(max-width:360px)') ? null : <TopBarDivider />}
      <SelectCurrencyContainer />
    </Box>
  );
};

export default TopBarSocialLinksContainer;
