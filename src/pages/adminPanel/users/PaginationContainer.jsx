import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Pagination from '../../../components/adminPanel/Pagination';
import { useUsersFilters } from '../../../hooks/useUsersFilters';
import { setFilters } from '../../../redux/slices/adminUsers';

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
  const filters = useSelector((state) => state.adminUsers.filters);

  const filteredUsers = useUsersFilters(filters, token);

  const totalUsersCount = filteredUsers.data?.totalElements || 0;

  const pagesCount = filteredUsers.data?.totalPages;

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

  return totalUsersCount > 0 ? (
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
