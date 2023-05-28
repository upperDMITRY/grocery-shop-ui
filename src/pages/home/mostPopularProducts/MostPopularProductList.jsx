import { Grid } from '@mui/material';
import MostPopularProduct from '../../../components/home/mostPopularProducts/MostPopularProduct';
import Spinner from '../../../components/common/Spinner';
import { useMostPopularProducts } from '../../../hooks/useMostPopularProducts';
import GreenPageHeader from '../../../components/common/GreenPageHeader';

const mostPopularProductListContainerStyle = {
  paddingLeft: { xs: 4, lg: 10 },
  paddingRight: { xs: 4, lg: 10 },
  marginTop: '50px',
  marginBottom: '50px',
  minWidth: 320,
};

const MostPopularProductList = () => {
  const mostPopularProducts = useMostPopularProducts();

  if (mostPopularProducts.isLoading) {
    return <Spinner />;
  }

  if (mostPopularProducts.isError) {
    return null;
  }

  return (
    <>
      {mostPopularProducts.data.length > 0 && (
        <GreenPageHeader title="Most popular products" />
      )}
      <Grid container spacing={3} sx={mostPopularProductListContainerStyle}>
        {mostPopularProducts.data.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4} xl={3}>
            <MostPopularProduct productItem={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MostPopularProductList;
