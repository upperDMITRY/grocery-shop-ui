import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Box, Button } from '@mui/material';
import { initProduct } from '../../../../redux/slices/adminProducts';
import Id from './Id';
import Name from './Name';
import Description from './Description';
import Price from './Price';
import Rating from './Rating';
import SizeType from './SizeType';
import Sizes from './Sizes';
import Image from './Image';
import ImageLink from './ImageLink';
import {
  setDisabledSaveButton,
  setAdminProductsError,
} from '../../../../redux/slices/adminProducts';

const productFormContainerStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  gap: 4,
  paddingLeft: 4,
  paddingRight: 4,
  paddingTop: 2,
  maxWidth: 616,
  minWidth: 288,
};

const container1Style = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 4,
};

const container2Style = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 4,
  flexGrow: 1,
  '@media (min-width: 893px)': {
    width: '288px',
    flexGrow: 0,
  },
};

const container3Style = { display: 'flex', gap: 3, flexGrow: 1 };

const buttonsContainerStyle = {
  display: 'flex',
  paddingBottom: '32px',
  paddingTop: '8px',
  marginLeft: '-10px',
};

const buttonStyle = {
  margin: '0 10px',
};

let prevProduct;

const ProductForm = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const token = useSelector((state) => state.auth.token);
  const id = useSelector((state) => state.adminProducts.id);
  const name = useSelector((state) => state.adminProducts.name);
  const description = useSelector((state) => state.adminProducts.description);
  const price = useSelector((state) => state.adminProducts.price);
  const rating = useSelector((state) => state.adminProducts.rating);
  const sizeType = useSelector((state) => state.adminProducts.sizeType);
  const sizes = useSelector((state) => state.adminProducts.sizes);
  const image = useSelector((state) => state.adminProducts.image);
  const imageError = useSelector((state) => state.adminProducts.imageError);
  const disabledSaveButton = useSelector(
    (state) => state.adminProducts.disabledSaveButton
  );

  const nameRef = useRef();

  useEffect(() => {
    if (nameRef) {
      nameRef.current?.children[0].focus();
    }
    prevProduct = {
      id,
      name,
      description,
      price,
      rating,
      sizeType,
      sizes,
      image,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (name.trim() && !imageError) {
      dispatch(setDisabledSaveButton(false));
    } else {
      dispatch(setDisabledSaveButton(true));
    }
  }, [dispatch, name, imageError]);

  const goBack = () => {
    history.goBack();
    dispatch(initProduct());
  };

  const saveProduct = async () => {
    const product = {
      id,
      name,
      description,
      price: price || 0,
      rating: rating || 0,
      sizeType,
      sizes,
      image,
    };

    if (JSON.stringify(prevProduct) !== JSON.stringify(product)) {
      try {
        const response = await axios({
          method: 'post',
          url: '/api/products',
          headers: {
            Authorization: token,
          },
          data: product,
        });
        if (response.status >= 200 && response.status < 300) {
          goBack();
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err && err.response) {
            dispatch(setAdminProductsError(err.response.data.message));
          }
        }
      }
    } else goBack();
  };

  return (
    <Box sx={productFormContainerStyle}>
      <Id />
      <Name ref={nameRef} />
      <Description />
      <Box sx={container1Style}>
        <Box sx={container2Style}>
          <Box sx={container3Style}>
            <Price />
            <Rating />
          </Box>
          <SizeType />
          <Sizes />
        </Box>
        <Image />
      </Box>
      <ImageLink />
      <Box sx={buttonsContainerStyle}>
        <Button sx={buttonStyle} variant="outlined" onClick={goBack}>
          Cancel
        </Button>
        <Button
          sx={buttonStyle}
          variant="outlined"
          onClick={saveProduct}
          disabled={disabledSaveButton}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default ProductForm;
