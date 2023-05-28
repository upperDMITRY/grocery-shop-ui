export const pageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: 320,
  paddingLeft: { xs: 4, lg: 10 },
  paddingRight: { xs: 4, lg: 10 },
  paddingTop: 10,
  paddingBottom: 10,
};

export const formContainerStyle = {
  padding: 3,
  paddingTop: 5,
  paddingBottom: 4,
  width: '100%',
  maxWidth: 600,
  backgroundColor: '#f7f7f7',
};

export const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  '& > :not(style)': {
    width: '100%',
  },
};

export const footerLinksStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 6,
  rowGap: 2,
  marginTop: 3,
  '& a': {
    textDecoration: 'none',
    color: 'common.black',
    transition: 'color 0.3s linear',
    '&:hover': {
      color: 'primary.main',
    },
  },
};
