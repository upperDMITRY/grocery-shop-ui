import { useSelector, useDispatch } from 'react-redux';
import { Box, TextField, FormControl, MenuItem } from '@mui/material';
import { setSizes } from '../../../../redux/slices/adminProducts';
import { memo } from 'react';

const NUMBER_OF_SIZES = [0, 1, 2];
const SIZE_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sizesContainerStyle = { display: 'flex', gap: 3, flexGrow: 1 };

const sizeContainerStyle = { width: 'calc(100% / 3)' };

const Sizes = memo(() => {
  const sizes = useSelector((state) => state.adminProducts.sizes);
  const dispatch = useDispatch();

  return (
    <Box sx={sizesContainerStyle}>
      {NUMBER_OF_SIZES.map((i) => (
        <FormControl key={i} sx={sizeContainerStyle}>
          <TextField
            select
            label={`Size ${i + 1}`}
            value={sizes[i]}
            onChange={(e) => {
              const newSizes = [
                ...sizes.slice(0, i),
                e.target.value,
                ...sizes.slice(i + 1),
              ];
              dispatch(setSizes(newSizes));
            }}
          >
            {SIZE_OPTIONS.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
      ))}
    </Box>
  );
});

export default Sizes;
