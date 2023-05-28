import Box from '@mui/system/Box';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from '@mui/material';
import KgButton from './KgButton';
import CommonButton from '../../common/buttons/CommonButton';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../redux/slices/cartSlice';
import { useState } from 'react';
import { addToCartRequest } from '../../../helpers/addToCartRequest';

//Components style setup
const cardSx = {
  height: '100%',
  padding: '20px 10px',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  '&:hover': {
    borderColor: 'primary.main',
  },
};

const cardContentSx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 0,
  '&:last-child': {
    paddingBottom: 0,
  },
};

const boxSx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const kgBoxSx = {
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
};

const cardNameSx = {
  fontSize: '1.5rem',
  fontWeight: 600,
  letterSpacing: '1px',
  marginTop: '10px',
  textAlign: 'center',
};

const ratingSx = {
  color: 'black',
  fontSize: '18px',
  marginTop: '10px',
  marginBottom: '10px',
};

const cardPriceSx = {
  fontSize: '1.5rem',
  fontWeight: 600,
  letterSpacing: '1px',
};

const MostPopularProduct = ({ productItem }) => {
  const auth = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { token, isAuth, email } = auth;

  const [active, setActive] = useState(0);

  const dispatch = useDispatch();

  const { id, name, price, image, sizeType, sizes } = productItem;

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
    <Card variant="outlined" sx={cardSx}>
      <CardContent sx={cardContentSx}>
        <Box sx={boxSx}>
          <Link to={`/products/${productItem.id}`}>
            <Box>
              <CardMedia
                component="img"
                width="100%"
                image={productItem.image}
                alt="product"
                sx={{ ':hover': { cursor: 'pointer' } }}
              />
            </Box>
          </Link>
          <Box sx={kgBoxSx}>
            {productItem.sizes.map((item, index) => (
              <KgButton
                index={index}
                active={index === active ? true : false}
                key={index}
                units={productItem.sizeType === 'KILOS' ? 'kg' : 'pcs'}
                value={item}
                onClick={sizeClickHandle}
              />
            ))}
          </Box>
          <Typography sx={cardNameSx}>{productItem.name}</Typography>
        </Box>
        <Box sx={boxSx}>
          <Rating
            name="half-rating-read"
            readOnly
            value={productItem.rating}
            precision={0.1}
            sx={ratingSx}
          />
          <Typography color="primary" sx={cardPriceSx}>
            {`${productItem.price.toFixed(2)} L`}
          </Typography>
          <CardActions sx={{ marginTop: '10px' }}>
            <CommonButton padding="10px 35px" onClick={addToCartClickHandler}>
              {'Add to Cart'}
            </CommonButton>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MostPopularProduct;
