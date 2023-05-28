import { useState } from 'react';
import { Pagination as MuiPagination, PaginationItem } from '@mui/material';

const Pagination = (props) => {
  const { handleChange, pagesCount, page, siblingCount } = props;
  const [pageState, setPageState] = useState(page);

  return (
    <MuiPagination
      onChange={(e, pageNumber) => {
        setPageState(pageNumber);
        handleChange(e, pageNumber);
      }}
      count={pagesCount}
      renderItem={(item) => {
        return (
          <PaginationItem
            {...item}
            sx={
              item.type === 'end-ellipsis' || item.type === 'start-ellipsis'
                ? { pointerEvents: 'none' }
                : null
            }
            disabled={
              (item.type === 'previous' && page === 1) ||
              (item.type === 'next' && page === pagesCount)
            }
          />
        );
      }}
      siblingCount={siblingCount}
      page={pageState}
    />
  );
};

export default Pagination;
