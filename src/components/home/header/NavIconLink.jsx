import { Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const linkContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'common.black',
  '& a': {
    color: 'inherit',
    display: 'flex',
    transition: 'color 0.3s linear',
    padding: 1,
    textDecoration: 'none',
    '&:hover': {
      color: 'primary.main',
    },
  },
};

const NavIconLink = ({ link, to, tooltip, onClick, id }) => {
  const iconLink = (
    <Box id={`navIconLink_${id}`} sx={linkContainerStyle}>
      <Link onClick={onClick} to={to}>
        {link}
      </Link>
    </Box>
  );

  return tooltip ? <Tooltip title={tooltip}>{iconLink}</Tooltip> : iconLink;
};

export default NavIconLink;
