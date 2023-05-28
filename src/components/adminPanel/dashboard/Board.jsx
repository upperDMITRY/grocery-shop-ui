import { Typography, Box } from '@mui/material';

const Board = ({ backgroundColor, title, value, icon }) => {
  return (
    <Box
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: '80px',
        backgroundPosition: 'right 10px bottom 50%',
        backgroundColor,
        backgroundImage: `url(${icon})`,
        width: '250px',
        height: '150px',
        borderRadius: '10px',
        padding: '10px',
        boxShadow: '0 5px 10px rgb(0 0 0 / 20%)',
      }}
    >
      <Typography variant="h3" color="white">
        {value}
      </Typography>
      <Typography fontSize="1.5rem" color="white" fontWeight="500">
        {title}
      </Typography>
    </Box>
  );
};

export default Board;
