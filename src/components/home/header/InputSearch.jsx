import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  InputBase,
  InputAdornment,
  IconButton,
} from '@mui/material';
import {React, useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {Link, useHistory} from "react-router-dom";
import CommonButton from "../../common/buttons/CommonButton";
import {setAnchorEl} from "../../../redux/slices/cartSlice";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {useDispatch} from "react-redux";

const inputSearchContainerStyle = { display: 'flex', flexGrow: 1 };

const inputBaseContainer = {
  flexGrow: 1,
  border: '1px solid rgba(0,0,0,0.2)',
  transition: 'all 0.3s linear',
  '&:hover': {
    border: '1px solid',
    borderColor: 'primary.main',
  },
};

const inputBaseStyle = {
  padding: 1,
  paddingLeft: 2,
};

const searchIconContainerStyle = {
  borderRadius: 0,
  '&:hover': {
    backgroundColor: 'secondary.main',
  },
};

const searchIconStyle = { color: 'white', fontSize: '20px' };

const InputSearch = () => {
  const [searchInput, setSearchInput] = useState('');
    const history = useHistory();

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

    const redirect = () => {
        history.push(`/home/search?name=${searchInput}`)
        window.location.reload()
    };

  const clearSearchInput = () => {
    setSearchInput('');
  };

  return (
    <Box sx={inputSearchContainerStyle}>
      <Box sx={inputBaseContainer}>
        <InputBase
          required={true}
          fullWidth
          sx={inputBaseStyle}
          placeholder="Search..."
          onChange={handleSearchInputChange}
          value={searchInput}
          endAdornment={
            searchInput && (
              <InputAdornment sx={{ marginRight: 1 }} position="end">
                <IconButton onClick={clearSearchInput} edge="end">
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            )
          }
        />
      </Box>
      <Button
        id="searchButton"
        color="primary"
        variant="contained"
        disableElevation
        sx={searchIconContainerStyle}
        onClick={redirect}
      >
        <SearchIcon sx={searchIconStyle} />
      </Button>
    </Box>
  );
};

export default InputSearch;
