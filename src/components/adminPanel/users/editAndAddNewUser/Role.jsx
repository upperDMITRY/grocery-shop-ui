import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, TextField, MenuItem } from '@mui/material';
import { setRole } from '../../../../redux/slices/adminUsers';

const ROLES = ['ADMIN', 'USER'];

const Role = memo(() => {
  const role = useSelector((state) => state.adminUsers.role);
  const dispatch = useDispatch();

  return (
    <FormControl fullWidth>
      <TextField
        select
        label="Role"
        value={role}
        onChange={(e) => dispatch(setRole(e.target.value))}
      >
        {ROLES.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
});

export default Role;
