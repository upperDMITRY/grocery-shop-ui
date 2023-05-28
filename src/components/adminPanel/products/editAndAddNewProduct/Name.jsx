import { useSelector, useDispatch } from 'react-redux';
import { OutlinedInput, FormControl, InputLabel } from '@mui/material';
import { setName } from '../../../../redux/slices/adminProducts';
import { forwardRef, memo } from 'react';

const Name = memo(
  forwardRef((props, ref) => {
    const dispatch = useDispatch();

    const name = useSelector((state) => state.adminProducts.name);

    const disabledSaveButton = useSelector(
      (state) => state.adminProducts.disabledSaveButton
    );

    const handleNameChange = (e) => {
      if (name.length < 256) {
        dispatch(setName(e.target.value.slice(0, 255)));
      }
    };

    return (
      <FormControl fullWidth>
        <InputLabel shrink>Name</InputLabel>
        <OutlinedInput
          ref={ref}
          autoFocus
          notched
          placeholder={disabledSaveButton ? 'Enter product name' : null}
          label="Name"
          value={name}
          onChange={handleNameChange}
        />
      </FormControl>
    );
  })
);

export default Name;
