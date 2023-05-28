import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const linkContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'common.white',
  '& :hover': {
    transition: 'color 0.3s linear',
    color: 'common.black',
    cursor: 'pointer',
  },
};

const linkStyle = {
  display: 'flex',
  transition: 'color 0.3s linear',
  textDecoration: 'none',
};

const TopBarLink = ({ link, to }) => {
  return (
    <Box sx={linkContainerStyle}>
      <Link href={to} color="inherit" sx={linkStyle}>
        {link}
      </Link>
    </Box>
  );
};

export default TopBarLink;
