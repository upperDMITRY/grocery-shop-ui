import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, TextField, MenuItem } from '@mui/material';
import { setSizeType } from '../../../../redux/slices/adminProducts';

const SIZE_TYPES = ['KILOS', 'PACKS'];

const SizeType = memo(() => {
  const sizeType = useSelector((state) => state.adminProducts.sizeType);
  const dispatch = useDispatch();

  return (
    <FormControl fullWidth>
      <TextField
        select
        label="Size type"
        value={sizeType}
        onChange={(e) => dispatch(setSizeType(e.target.value))}
      >
        {SIZE_TYPES.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
});

export default SizeType;
