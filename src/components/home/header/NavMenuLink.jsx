import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const linkStyle = {
  padding: 2,
  paddingTop: 0,
  paddingBottom: 0,
  '& :hover': {
    color: 'primary.main',
    cursor: 'pointer',
  },
};

const linkTextStyle = {
  fontFamily: 'Lemonada',
  fontWeight: 600,
  fontSize: '14px',
  color: 'common.black',
  transition: 'all 0.3s linear',
};

const NavLink = ({ link, to }) => {
  return (
    <Link href={to} underline="none" sx={linkStyle}>
      <Typography sx={linkTextStyle}>{link}</Typography>
    </Link>
  );
};

export default NavLink;
