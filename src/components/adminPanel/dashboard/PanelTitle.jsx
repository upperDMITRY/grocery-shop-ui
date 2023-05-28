import { Box, Typography } from '@mui/material';
import DashboardNav from './DashboardNav';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';

const selectIcon = (icon) => {
  const dashBoardIcon = <DashboardIcon sx={{ mr: 0.5 }} fontSize="inherit" />;
  const productIcon = <CategoryIcon sx={{ mr: 0.5 }} fontSize="inherit" />;
  const usersIcon = <PeopleIcon sx={{ mr: 0.5 }} fontSize="inherit" />;
  // eslint-disable-next-line
  switch (icon) {
    case 'dashboard':
      return dashBoardIcon;

    case 'products':
      return productIcon;

    case 'users':
      return usersIcon;
  }
};

const PanelTitle = ({ title, icon }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: ' 15px',
        backgroundColor: '#f5f6fa',
      }}
    >
      <Typography component="h1" variant="h4" color="#444444" fontWeight="500">
        {title}
      </Typography>
      <DashboardNav navTitle={title} icon={selectIcon(icon)} />
    </Box>
  );
};

export default PanelTitle;
