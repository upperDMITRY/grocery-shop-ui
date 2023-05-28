import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFilters,
  setOpenDialogRemoveProduct,
  setAdminProductsError,
} from '../../../redux/slices/adminProducts';
import { useProductsFilters } from '../../../hooks/useProductsFilters';

const dialogStyle = {
  paddingLeft: '260px',
  '& .MuiPaper-root': {
    borderRadius: 2,
    minWidth: '200px',
    maxWidth: '600px',
  },
};

const dialogActionsStyle = {
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '20px',
  paddingTop: 0,
};

const buttonStyle = {
  padding: '4px 8px',
  margin: '0 10px',
};

const DialogRemoveProduct = () => {
  const token = useSelector((state) => state.auth.token);
  const filters = useSelector((state) => state.adminProducts.filters);

  const openDialogRemoveProduct = useSelector(
    (state) => state.adminProducts.openDialogRemoveProduct
  );

  const removingProduct = useSelector(
    (state) => state.adminProducts.removingProduct
  );

  const filteredProducts = useProductsFilters(filters, token);

  const dispatch = useDispatch();

  const numberOfElements = useSelector(
    (state) => state.adminProducts.numberOfElements
  );

  const pageNumber = useSelector(
    (state) => state.adminProducts.filters.pageNumber
  );

  const handleRemoveProduct = async () => {
    try {
      const response = await axios({
        method: 'delete',
        url: `/api/products/${removingProduct.id}`,
        headers: {
          Authorization: token,
        },
      });

      if (response.status >= 200 && response.status < 300) {
        dispatch(setOpenDialogRemoveProduct(false));

        if (numberOfElements === 1 && pageNumber > 1) {
          dispatch(setFilters({ pageNumber: pageNumber - 1 }));
        }

        filteredProducts.refetch();
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err && err.response) {
          dispatch(setAdminProductsError(err.response.data.message));
        }
      }
    }
  };

  return (
    <Dialog
      sx={dialogStyle}
      open={openDialogRemoveProduct}
      onClose={() => {
        dispatch(setOpenDialogRemoveProduct(false));
      }}
      disableScrollLock
    >
      <DialogContent>
        <DialogContentText align="center">
          Remove <b>{removingProduct.name}</b> with ID:{' '}
          <b>{removingProduct.id}</b> from the database?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={dialogActionsStyle}>
        <Button
          sx={buttonStyle}
          variant="outlined"
          size="small"
          onClick={handleRemoveProduct}
        >
          Yes
        </Button>
        <Button
          sx={buttonStyle}
          variant="outlined"
          size="small"
          onClick={() => {
            dispatch(setOpenDialogRemoveProduct(false));
          }}
          autoFocus
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogRemoveProduct;
