import Typography from '@mui/material/Typography';

const resultsCountStyle = {
  fontStyle: 'italic',
  color: 'rgba(0,0,0,0.5)',
};

const ResultsCount = ({ text }) => {
  return (
    <Typography sx={resultsCountStyle} textAlign="center">
      {text}
    </Typography>
  );
};

export default ResultsCount;
