import { memo, forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  OutlinedInput,
  FormControl,
  InputLabel,
  InputAdornment,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { setRating } from '../../../../redux/slices/adminProducts';
import NumberFormat from 'react-number-format';

const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, rating, ...other } = props;

  return (
    <NumberFormat
      {...other}
      onValueChange={(values) => {
        const { floatValue } = values;
        onChange({
          target: {
            value: floatValue,
          },
        });
      }}
      decimalSeparator={'.'}
      decimalScale={1}
      allowNegative={false}
      allowLeadingZeros={false}
      maxLength={3}
      placeholder={'0'}
      isNumericString
      value={rating}
      isAllowed={(values) => {
        const { floatValue } = values;
        if (!floatValue) return true;
        else {
          return floatValue < 5.1;
        }
      }}
    />
  );
});

const Rating = memo(() => {
  const rating = useSelector((state) => state.adminProducts.rating);
  const dispatch = useDispatch();

  return (
    <FormControl sx={{ width: '50%' }}>
      <InputLabel>Rating</InputLabel>
      <OutlinedInput
        label="Rating"
        value={rating}
        onChange={(e) => dispatch(setRating(e.target.value))}
        sx={{ paddingLeft: '12px' }}
        startAdornment={
          <InputAdornment position="start">
            <StarIcon fontSize="small" />
          </InputAdornment>
        }
        inputComponent={NumberFormatCustom}
        inputProps={{ rating }}
      />
    </FormControl>
  );
});

export default Rating;
