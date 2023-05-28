import { memo } from 'react';
import { OutlinedInput, FormControl, InputLabel } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setDescription } from '../../../../redux/slices/adminProducts';

const Descrition = memo(() => {
  const dispatch = useDispatch();

  const description = useSelector((state) => state.adminProducts.description);

  const handleDescriptionChange = (e) => {
    if (description.length < 256) {
      dispatch(setDescription(e.target.value.slice(0, 255)));
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Description</InputLabel>
      <OutlinedInput
        label="Description"
        value={description}
        onChange={handleDescriptionChange}
        maxRows={3}
        minRows={3}
        multiline
      />
    </FormControl>
  );
});

export default Descrition;
