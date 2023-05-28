import { useSelector, useDispatch } from 'react-redux';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import {
  setImageLoaded,
  setImageError,
  setImage,
} from '../../../../redux/slices/adminProducts';
import { memo } from 'react';

const ImageLink = memo(() => {
  const dispatch = useDispatch();

  const image = useSelector((state) => state.adminProducts.image);
  const imageError = useSelector((state) => state.adminProducts.imageError);
  const disabledSaveButton = useSelector(
    (state) => state.adminProducts.disabledSaveButton
  );

  const handleImageLinkChange = (e) => {
    if (image.length < 256) {
      dispatch(setImageLoaded(false));
      dispatch(setImageError(false));
      dispatch(setImage(e.target.value.slice(0, 255)));
    }
  };

  return (
    <FormControl fullWidth error={imageError}>
      <InputLabel shrink>Image link</InputLabel>
      <OutlinedInput
        notched
        placeholder={
          disabledSaveButton ? 'Place the link on the product photo' : null
        }
        label="Image link"
        value={image}
        onChange={handleImageLinkChange}
      />
    </FormControl>
  );
});

export default ImageLink;
