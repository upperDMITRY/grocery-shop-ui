import Box from '@mui/system/Box';
import TopBarTextLinksContainer from './TopBarTextLinksContainer';
import TopBarSocialLinksContainer from './TopBarSocialLinksContainer';
import useMediaQuery from '@mui/material/useMediaQuery';

const TopBarContainer = () => {
  const maxWidth767 = useMediaQuery('(max-width:767px)');
  const maxWidth989 = useMediaQuery('(max-width:989px)');

  const topBarContainerStyle = {
    fontFamily: 'Open Sans',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: useMediaQuery('(max-width:990px)')
      ? 'center'
      : 'space-between',
    alignItems: 'center',
    minHeight: maxWidth767 ? 62 : maxWidth989 ? 52 : 46,
    paddingTop: maxWidth989 ? 2 : 0,
    paddingBottom: maxWidth989 ? 2 : 0,
    paddingLeft: { xs: 4, lg: 10 },
    paddingRight: { xs: 4, lg: 10 },
    columnGap: 5,
    rowGap: 3,
    backgroundColor: 'primary.main',
  };

  return (
    <Box sx={topBarContainerStyle}>
      <TopBarTextLinksContainer />
      <TopBarSocialLinksContainer />
    </Box>
  );
};

export default TopBarContainer;
