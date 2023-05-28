import { Typography, Breadcrumbs, Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const DashboardNav = ({ icon, navTitle }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center' }}
        color="inherit"
        href="/"
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Home
      </Link>

      <Typography
        sx={{ display: 'flex', alignItems: 'center' }}
        color="text.primary"
      >
        {icon}
        {navTitle}
      </Typography>
    </Breadcrumbs>
  );
};

export default DashboardNav;
