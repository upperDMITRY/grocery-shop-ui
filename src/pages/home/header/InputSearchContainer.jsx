import InputSearch from '../../../components/home/header/InputSearch';
import Box from '@mui/material/Box';

const inputSearchContainerStyle = { display: 'flex', width: '100%' };

const InputSearchContainer = () => {
  return (
    <Box sx={inputSearchContainerStyle}>
      <InputSearch />
    </Box>
  );
};

export default InputSearchContainer;
