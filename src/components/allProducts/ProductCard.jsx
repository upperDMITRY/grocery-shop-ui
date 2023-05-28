import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Rating,
} from '@mui/material';
import { addItem } from '../../redux/slices/cartSlice';
import { addToCartRequest } from '../../helpers/addToCartRequest';
import CommonButton from '../common/buttons/CommonButton';
import SizeButton from './SizeButton';

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

const descriptionStyle = {
  typography: 'body2',
  marginTop: { xs: 2.5, sm: 2 },
};

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

const ProductCard = ({ product, numberOfElements }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { id, image, name, description, price, rating, sizeType, sizes } =
    product;

  const cartItems = useSelector((state) => state.cart.cartItems);
  const auth = useSelector((state) => state.auth);
  const { token, isAuth, email } = auth;

  const [active, setActive] = useState(0);

  const dispatch = useDispatch();

  const addToCartClickHandler = (e) => {
    const product = {
      productId: id,
      name,
      price,
      image,
      sizeType,
      size: sizes[active],
      quantity: 1,
    };

    const match = cartItems.find(
      (item) => item.productId === id && item.size === product.size
    );
    const index = cartItems.indexOf(match);
    if (index > -1 && cartItems[index].quantity > 98) {
      return;
    } else {
      dispatch(addItem(product));

      addToCartRequest({
        token,
        isAuth,
        productId: product.productId,
        size: product.size,
        quantity: product.quantity,
        email,
      });
    }

    e.target.blur();
  };

  const sizeClickHandle = (index) => {
    setActive(index);
  };

  return (
    <Card sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Link
          to={`/products/${id}`}
          style={{ textDecoration: 'none', color: '#000' }}
        >
          <Box sx={nameStyle}>{name}</Box>
        </Link>
        <Box sx={{ display: 'flex' }}>
          <Box sx={textWithButtonContainer}>
            <Box>
              <Box sx={{ typography: 'body2' }}>
                <Box sx={{ marginTop: 2 }}>
                  <Box sx={priceStyle}>{price}</Box>
                  <Box sx={dollarSignStyle}> L</Box>
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
                    {sizes.map((size, index) => (
                      <SizeButton
                        key={size}
                        index={index}
                        active={index === active ? true : false}
                        size={size}
                        onClick={sizeClickHandle}
                      />
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
            <Link to={`/products/${id}`}>
              <Box
                component="img"
                sx={imageStyle}
                alt={name}
                src={image}
                onLoad={() => setImageLoaded(true)}
              />
            </Link>
          </Box>
        </Box>

        <Box sx={descriptionStyle}>{description}</Box>

        <CardActions sx={cardActionsStyle}>
          <CommonButton padding="10px 35px" onClick={addToCartClickHandler}>
            Add to Cart
          </CommonButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
