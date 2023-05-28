import Box from '@mui/system/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import SelectProductCategoryContainer from './SelectProductCategoryContainer';
import InputSearchContainer from './InputSearchContainer';

const selectProductCategoryContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: { xs: 4, lg: 10 },
  paddingRight: { xs: 4, lg: 10 },
  marginTop: 3,
};

const SearchBarContainer = ({title}) => {
  return (
    <Box sx={selectProductCategoryContainerStyle}>
      {useMediaQuery('(min-width:768px)') && <SelectProductCategoryContainer title={title}/>}
      <InputSearchContainer />
    </Box>
  );
};

export default SearchBarContainer;
