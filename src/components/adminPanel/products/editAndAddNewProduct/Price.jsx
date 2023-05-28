import {
  OutlinedInput,
  FormControl,
  InputLabel,
  InputAdornment,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setPrice } from '../../../../redux/slices/adminProducts';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { memo, forwardRef } from 'react';
import NumberFormat from 'react-number-format';

const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, price, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        const { floatValue } = values;
        onChange({
          target: {
            value: floatValue,
          },
        });
      }}
      decimalSeparator={'.'}
      decimalScale={2}
      allowNegative={false}
      allowLeadingZeros={false}
      maxLength={6}
      placeholder={'0'}
      isNumericString
      value={price}
      isAllowed={(values) => {
        const { floatValue } = values;
        if (!floatValue) return true;
        else {
          return floatValue < 1000;
        }
      }}
    />
  );
});

const Price = memo(() => {
  const price = useSelector((state) => state.adminProducts.price);
  const dispatch = useDispatch();

  return (
    <FormControl sx={{ width: '50%' }}>
      <InputLabel>Price</InputLabel>
      <OutlinedInput
        label="Price"
        value={price}
        onChange={(e) => dispatch(setPrice(e.target.value))}
        sx={{ paddingLeft: '9px' }}
        startAdornment={
          <InputAdornment position="start" sx={{ marginRight: 0 }}>
            <AttachMoneyIcon fontSize="small" />
          </InputAdornment>
        }
        inputComponent={NumberFormatCustom}
        inputProps={{ price }}
      />
    </FormControl>
  );
});

export default Price;
