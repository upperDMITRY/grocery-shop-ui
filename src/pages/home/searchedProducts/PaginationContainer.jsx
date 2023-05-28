import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Pagination from '../../../components/adminPanel/Pagination';
import { setPageNumber } from '../../../redux/slices/allProducts';
import {useSearchProducts} from "../../../hooks/useSearchProducts";

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

  const pageNumber = useSelector((state) => state.allProducts.pageNumber);

  const allProducts = useSearchProducts(pageNumber, "fruit");

  const totalProductsCount = allProducts.data?.totalElements || 0;

  const pagesCount = allProducts.data?.totalPages;

  const currentPage = pageNumber;

  const dispatch = useDispatch();

  const handleChange = (e, page) => {
    if (currentPage !== page) {
      dispatch(setPageNumber(page));
      const pageHeader = document.getElementById('Search header');
      pageHeader?.scrollIntoView();
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