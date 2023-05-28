import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, InputBase, InputAdornment, IconButton } from '@mui/material';
import { setFilters } from '../../../redux/slices/adminUsers';
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

  const email = useSelector((state) => state.adminUsers.filters.email);

  const [inputState, setInputState] = useState(email);

  useEffect(() => {
    setInputState(email);
  }, [email]);

  const handleSearchChange = debounce((e) => {
    const trimmedEmail = e.target.value.trim().toLowerCase();
    if (email !== trimmedEmail) {
      dispatch(
        setFilters({
          pageNumber: 1,
          email: trimmedEmail,
        })
      );
    }
  });

  const clearSearchInput = () => {
    dispatch(setFilters({ email: '' }));
  };

  return (
    <Box sx={inputSearchContainerStyle}>
      <Box sx={inputBaseContainerStyle}>
        <InputBase
          fullWidth
          sx={inputBaseStyle}
          placeholder="Search by email address..."
          onChange={(e) => {
            setInputState(e.target.value);
            handleSearchChange(e);
          }}
          value={inputState}
          endAdornment={
            email && (
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
