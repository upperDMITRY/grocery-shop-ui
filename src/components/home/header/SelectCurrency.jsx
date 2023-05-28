import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const formControlStyle = { width: 70 };

const selectStyle = {
  '& input': {
    padding: 0,
    border: 0,
  },
  '& .MuiSelect-select[aria-expanded="true"]': {
    color: 'common.black',
  },

  '&:hover': {
    '& .MuiSelect-iconOutlined': {
      color: 'common.black',
      transition: 'color 0.3s linear',
    },
    '& .MuiSelect-select': {
      color: 'common.black',
      transition: 'color 0.3s linear',
    },
  },
  '& .MuiSelect-select': {
    color: 'common.white',
    padding: 0,
    transition: 'color 0.3s linear',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiSelect-iconOutlined': {
    color: 'common.white',
    transition: 'color 0.3s linear',
    '&.MuiSelect-iconOpen': {
      color: 'common.black',
    },
  },
};

const menuItemStyle = { fontFamily: 'Open Sans' };

const SelectCurrency = ({ handleChange, values }) => {
  const [currency, setCurrency] = useState(values[0]);

  return (
    <FormControl sx={formControlStyle}>
      <Select
        sx={selectStyle}
        value={currency}
        onChange={(e) => {
          handleChange(e, setCurrency);
        }}
      >
        {values.map((value) => {
          return (
            <MenuItem key={value} value={value} sx={menuItemStyle}>
              {value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectCurrency;
