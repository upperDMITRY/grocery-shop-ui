import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Button,
  Rating,
} from '@mui/material';
import {
  setNumberOfElements,
  setOpenDialogRemoveProduct,
  setRemovingProduct,
} from '../../../redux/slices/adminProducts';

const SIZE_TYPES = {
  KILOS: 'kg',
  PACKS: 'pcs',
};

const cardStyle = {
  minWidth: { xs: 275, sm: 336 },
  width: { xs: 275, sm: 336 },
  borderRadius: 2,
  boxShadow: '0 5px 10px rgba(0,0,0,0.2)',
  backgroundColor: 'grey',
};

const cardContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: { xs: 1, sm: 1.5 },
  ':last-child': { paddingBottom: { xs: 1, sm: 1.5 } },
  height: '100%',
};

const idStyle = { display: 'flex', fontSize: '0.9rem', color: 'grey40.main' };

const nameStyle = {
  typography: 'h5',
  fontSize: '1.3rem',
  fontWeight: 500,
  wordBreak: 'break-word',
};

const dollarSignStyle = {
  fontSize: '1.2rem',
  color: 'grey60.main',
  display: 'inline',
};

const priceStyle = {
  fontSize: '1.4rem',
  marginLeft: '2px',
  fontWeight: 600,
  color: 'primary.main',
  display: 'inline',
};

const ratingContainerStyle = {
  marginTop: { xs: 0.5, sm: 1.5 },
  display: 'flex',
  alignItems: 'center',
};

const ratingStarsStyle = {
  color: 'grey60.main',
  fontSize: { xs: '16px', sm: '17px' },
};

const ratingStyle = {
  display: 'inline',
  marginLeft: '8px',
  fontSize: '1rem',
  fontWeight: 600,
};

const sizeTypesContainerStyle = {
  display: 'flex',
  gap: 1,
  marginTop: { xs: 1, sm: 2 },
  flexWrap: 'wrap',
};

const sizeTypeNumberStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '24px',
  lineHeight: '24px',
  padding: 1,
  margin: 0,
  border: '1px solid',
  borderColor: 'grey40.main',
  borderRadius: '5px',
};

const sizeTypeTextStyle = {
  display: 'inline',
  textTransform: 'capitalize',
  fontSize: '1rem',
};

const imageContainerStyle = {
  overflow: 'hidden',
  borderRadius: 1,
  position: 'relative',
  padding: 0,
  margin: 0,
  height: { xs: 100, sm: 150 },
};

const imageSkeletonStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: { xs: 100, sm: 150 },
  height: { xs: 100, sm: 150 },
};

const imageStyle = {
  width: { xs: 100, sm: 150 },
  marginRight: 0,
  position: 'relative',
};

const descriptionStyle = { typography: 'body2', marginTop: { xs: 2.5, sm: 2 } };

const textWithButtonContainer = {
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const cardActionsStyle = {
  display: 'flex',
  gap: 2,
  padding: 0,
  paddingBottom: 1,
  marginTop: 3,
  '& a': {
    textDecoration: 'none',
  },
};

const cardButtonStyle = {
  padding: '4px 8px',
  textDecoration: 'none',
};

const ProductCard = ({ product, numberOfElements }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { id, image, name, description, price, rating, sizeType, sizes } =
    product;

  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(setOpenDialogRemoveProduct(true));
    dispatch(setRemovingProduct({ id, name }));
    dispatch(setNumberOfElements(numberOfElements));
  };

  return (
    <Card sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Box sx={nameStyle}>{name}</Box>
        <Box sx={idStyle}>
          <Box>ID:</Box>
          <Box sx={{ marginLeft: '4px' }}>{id}</Box>
        </Box>

        <Box sx={{ display: 'flex' }}>
          <Box sx={textWithButtonContainer}>
            <Box>
              <Box sx={{ typography: 'body2' }}>
                <Box sx={{ marginTop: 2 }}>
                  <Box sx={dollarSignStyle}> L</Box>
                  <Box sx={priceStyle}>{price}</Box>
                </Box>
                <Box sx={ratingContainerStyle}>
                  <Rating
                    readOnly
                    value={rating}
                    precision={0.1}
                    sx={ratingStarsStyle}
                  />
                  {rating === 0 ? null : <Box sx={ratingStyle}>{rating}</Box>}
                </Box>
                <Box>
                  <Box sx={sizeTypesContainerStyle}>
                    {sizes.map((size) => (
                      <Box
                        key={size}
                        typography="body"
                        sx={sizeTypeNumberStyle}
                      >
                        {size}
                      </Box>
                    ))}
                    <Box sx={sizeTypeTextStyle}>{SIZE_TYPES[sizeType]}</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={imageContainerStyle}>
            {!imageLoaded && (
              <Skeleton
                sx={imageSkeletonStyle}
                animation="wave"
                variant="rectangular"
              />
            )}
            <Box
              component="img"
              sx={imageStyle}
              alt={name}
              src={image}
              onLoad={() => setImageLoaded(true)}
            />
          </Box>
        </Box>

        <Box sx={descriptionStyle}>{description}</Box>

        <CardActions sx={cardActionsStyle}>
          <Button
            variant="outlined"
            sx={cardButtonStyle}
            size="small"
            onClick={handleDeleteProduct}
          >
            Delete
          </Button>
          <Link to={`/admin/products/${id}`}>
            <Button variant="outlined" sx={cardButtonStyle} size="small">
              Edit
            </Button>
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
