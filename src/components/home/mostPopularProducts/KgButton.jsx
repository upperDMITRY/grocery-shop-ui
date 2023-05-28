import { Button } from '@mui/material';

const kgbutton = {
  color: 'white',
  textTransform: 'none',
  borderRadius: '15px',
  lineHeight: 0,
  padding: '15px 5px',
  fontSize: '1rem',
  minWidth: '60px',
};

const KgButton = ({ value, units, onClick, index, active }) => {
  return (
    <Button
      variant="contained"
      color={active ? 'primary' : 'secondary'}
      disableElevation
      sx={kgbutton}
      onClick={() => onClick(index)}
    >
      {value} {units}
    </Button>
  );
};

export default KgButton;
