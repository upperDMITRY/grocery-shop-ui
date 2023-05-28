import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Pagination from '../../../components/adminPanel/Pagination';
import { useProductsFilters } from '../../../hooks/useProductsFilters';
import { setFilters } from '../../../redux/slices/adminProducts';

const paginationContainerStyle = {
  display: 'block',
  width: 'fit-content',
  margin: '0 auto',
  marginTop: 4,
  marginBottom: 4,
};

const PaginationContainer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const token = useSelector((state) => state.auth.token);
  const filters = useSelector((state) => state.adminProducts.filters);

  const filteredProducts = useProductsFilters(filters, token);

  const totalProductsCount = filteredProducts.data?.totalElements || 0;

  const pagesCount = filteredProducts.data?.totalPages;

  const currentPage = filters.pageNumber;

  const dispatch = useDispatch();

  const handleChange = (e, page) => {
    if (currentPage !== page) {
      dispatch(setFilters({ pageNumber: page }));
      window.scrollTo({
        top: 0,
      });
    }
  };

  return totalProductsCount > 0 ? (
    <Box sx={paginationContainerStyle}>
      <Pagination
        handleChange={handleChange}
        pagesCount={pagesCount || 0}
        page={currentPage}
        siblingCount={matches ? 1 : 0}
      />
    </Box>
  ) : null;
};

export default PaginationContainer;
