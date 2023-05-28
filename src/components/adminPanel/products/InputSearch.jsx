import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, InputBase, InputAdornment, IconButton } from '@mui/material';
import { setFilters } from '../../../redux/slices/adminProducts';
import CloseIcon from '@mui/icons-material/Close';

const inputSearchContainerStyle = {
  display: 'flex',
  flexGrow: 1,
  minWidth: '400px',
  maxWidth: '600px',
};

const inputBaseContainerStyle = {
  flexGrow: 1,
  border: '1px solid rgba(0,0,0,0.2)',
  borderRadius: '50px',
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

const debounce = (func, timeout = 500) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

const InputSearch = () => {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.adminProducts.filters.name);

  const [inputState, setInputState] = useState(name);

  useEffect(() => {
    setInputState(name);
  }, [name]);

  const handleSearchChange = debounce((e) => {
    const trimmedName = e.target.value.trim().toLowerCase();
    if (name !== trimmedName) {
      dispatch(
        setFilters({
          pageNumber: 1,
          name: trimmedName,
        })
      );
    }
  });

  const clearSearchInput = () => {
    dispatch(setFilters({ name: '' }));
  };

  return (
    <Box sx={inputSearchContainerStyle}>
      <Box sx={inputBaseContainerStyle}>
        <InputBase
          fullWidth
          sx={inputBaseStyle}
          placeholder="Search by product name..."
          onChange={(e) => {
            setInputState(e.target.value);
            handleSearchChange(e);
          }}
          value={inputState}
          endAdornment={
            name && (
              <InputAdornment sx={{ marginRight: 1 }} position="end">
                <IconButton onClick={clearSearchInput} edge="end">
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            )
          }
        />
      </Box>
    </Box>
  );
};

export default InputSearch;
