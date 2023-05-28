import { Rating } from '@mui/material';

const productRatingStyle = {
  color: 'common.black',
  fontSize: '20px',
  marginTop: '20px',
  marginBottom: '20px',
};

const ProductRating = ({ rating }) => {
  return (
    <Rating readOnly value={rating} precision={0.1} sx={productRatingStyle} />
  );
};

export default ProductRating;
