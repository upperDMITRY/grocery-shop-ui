import { Checkbox, FormControlLabel, Typography } from '@mui/material';

const saveInfoStyle = {
  '@media (max-width: 750px)': {
    paddingBottom: '15px',
  },
};

const SaveInformation = ({ checked, handleCheck }) => {
  return (
    <FormControlLabel
      sx={saveInfoStyle}
      control={<Checkbox onChange={handleCheck} checked={checked} />}
      label={
        <Typography sx={{ fontSize: '14px' }}>
          Save this information for next time
        </Typography>
      }
    />
  );
};

export default SaveInformation;
