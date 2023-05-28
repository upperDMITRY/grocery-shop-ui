import { Box } from '@mui/material';

const SizeButton = ({ active, index, size, onClick }) => {
  const sizeTypeNumberStyle = {
    backgroundColor: active ? 'primary.main' : 'common.white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '24px',
    lineHeight: '24px',
    padding: 1,
    margin: 0,
    color: active ? 'common.white' : 'common.black',
    border: '1px solid',
    borderColor: active ? 'primary.main' : 'grey40.main',
    borderRadius: '15px',
    transition: 'all 0.3s',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: active ? 'rgb(95, 139, 51)' : 'rgba(0,0,0,0.1)',
      borderColor: active ? 'rgb(95, 139, 51)' : 'grey40.main',
    },
  };

  return (
    <Box
      index={index}
      key={size}
      typography="body"
      sx={sizeTypeNumberStyle}
      onClick={() => onClick(index)}
    >
      {size}
    </Box>
  );
};

export default SizeButton;
