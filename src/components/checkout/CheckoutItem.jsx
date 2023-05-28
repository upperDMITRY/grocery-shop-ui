import { Badge, CardMedia, Typography, Box } from '@mui/material';

const imageStyle = {
  width: '64px',
  height: '64px',
  objectFit: 'fill',
  border: '1px solid rgba(0,0,0,0.1)',
  borderRadius: '8px',
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
};

const sizeTypes = {
  KILOS: 'kg',
  PACKS: 'pcs',
};

const CheckoutItem = ({ cartItem }) => {
  const { image, name, price, quantity, size, sizeType } = cartItem;
  return (
    <Box sx={containerStyle}>
      <Badge
        badgeContent={quantity}
        sx={{
          '& .MuiBadge-badge': {
            color: 'white',
            backgroundColor: 'rgba(114,114,114,0.9)',
          },
        }}
      >
        <CardMedia
          component="img"
          width="100%"
          image={image}
          alt={`image of ${name}`}
          sx={imageStyle}
        />
      </Badge>
      <Box sx={{ width: '100%' }}>
        <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: '12px', color: '#717171' }}
        >{`${size} ${sizeTypes[sizeType]}`}</Typography>
      </Box>

      <Typography
        sx={{ color: '#323232', fontWeight: '500', fontSize: '14px' }}
      >{`${price}L`}</Typography>
    </Box>
  );
};

export default CheckoutItem;
