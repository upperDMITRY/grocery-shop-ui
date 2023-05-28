import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import VegetablePage from "../../../pages/home/vegetableProducts/VegetablePage";
import {Link} from "react-router-dom";

const formControlContainerStyle = {
  border: '1px solid #ccc',
  borderRight: 'none',
  transition: 'all 0.3s linear',
  '&:hover': {
    border: '1px solid',
    borderRight: 'none',
    borderColor: 'primary.main',
  },
};

const formControlStyle = { minWidth: 250, width: '30%' };

const selectStyle = {
  '& .MuiSelect-select': {
    paddingTop: '12px',
    paddingBottom: '13px',
    fontFamily: 'Open Sans',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
};

const menuItemStyle = {
  fontFamily: 'Open Sans',
  transition: 'background-color 0.3s linear',
  '&:hover': {
    backgroundColor: 'secondary.main',
  },
};

const SelectProductCategory = ({ handleChange, values, title }) => {
  const [productCategory, setProductCategory] = useState(title);
  const navLinks = {
    'All Categories': '/',
    'Vegetables': '/home/vegetables',
    'Fruits': '/home/fruit',
    'Other': '/home/otherProducts'
  };

  return (
    <Box sx={formControlContainerStyle}>
      <FormControl sx={formControlStyle}>
        <Select
          sx={selectStyle}
          value={productCategory}
          onChange={(e) => {
            handleChange(e, setProductCategory);
          }}
        >
          {values.map((value) => {
            return (
                <MenuItem key={value} value={value} sx={menuItemStyle} component={Link} to={navLinks[value]} >
                  {value}
                </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectProductCategory;
