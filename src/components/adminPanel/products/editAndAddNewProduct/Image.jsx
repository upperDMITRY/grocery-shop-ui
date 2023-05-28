import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Skeleton, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {
  setImageLoaded,
  setImageError,
} from '../../../../redux/slices/adminProducts';

const imageContainerStyle = {
  position: 'relative',
  padding: 0,
  margin: '0 auto',
  width: 232,
  height: 232,
  overflow: 'hidden',
  borderRadius: 1,
};

const imageSkeletonStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: 232,
  height: 232,
  borderRadius: 1,
};

const imageErrorContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  backgroundColor: '#e3e3e3',
  borderRadius: 1,
};

const Image = memo(() => {
  const dispatch = useDispatch();

  const image = useSelector((state) => state.adminProducts.image);
  const imageError = useSelector((state) => state.adminProducts.imageError);
  const imageLoaded = useSelector((state) => state.adminProducts.imageLoaded);

  const productCardImageStyle = {
    width: 232,
    borderRadius: 1,
    marginRight: 0,
    position: 'relative',
    display: imageLoaded ? 'block' : 'none',
  };

  return (
    <Box sx={imageContainerStyle}>
      {!imageLoaded && (
        <Skeleton
          sx={imageSkeletonStyle}
          animation="wave"
          variant="rectangular"
        />
      )}

      {imageError && (
        <Box sx={imageErrorContainerStyle}>
          {image.trim() === '' ? null : (
            <>
              <ErrorOutlineIcon fontSize="large" />
              <Typography>Image loading error</Typography>
            </>
          )}
        </Box>
      )}

      <Box
        component="img"
        sx={productCardImageStyle}
        alt="Product image"
        src={image}
        onLoad={() => {
          dispatch(setImageError(false));
          dispatch(setImageLoaded(true));
        }}
        onError={() => {
          dispatch(setImageLoaded(true));
          dispatch(setImageError(true));
        }}
      />
    </Box>
  );
});

export default Image;
