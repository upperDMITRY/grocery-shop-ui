import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, TextField, MenuItem } from '@mui/material';
import { setStatus } from '../../../../redux/slices/adminUsers';

const STATUSES = ['ACTIVE', 'BANNED'];

const Status = memo(() => {
  const status = useSelector((state) => state.adminUsers.status);
  const dispatch = useDispatch();

  return (
    <FormControl fullWidth>
      <TextField
        select
        label="Status"
        value={status}
        onChange={(e) => dispatch(setStatus(e.target.value))}
      >
        {STATUSES.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
});

export default Status;
