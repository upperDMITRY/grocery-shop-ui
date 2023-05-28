import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { React, useState } from 'react';
import { itemsStyle } from './Sidebar';
import CheckoutItem from './CheckoutItem';

const accordionStyle = {
  borderTop: '1px solid rgba(0, 0, 0, 0.12)',
  marginBottom: '28px',
  '@media (min-width : 1000px)': {
    display: 'none',
  },
};

const AccordionComponent = ({ cartItems, totalPrice }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      sx={accordionStyle}
      elevation={0}
      expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}
    >
      <AccordionSummary
        sx={{
          paddingLeft: '5px',
          color: 'primary.main',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        <ShoppingCartOutlinedIcon
          sx={{ paddingRight: '5px', marginRight: '8px' }}
        />
        <Typography sx={{ color: 'primary.main', fontSize: '14px' }}>
          {expanded ? 'Hide order summary' : 'Show order summary'}
        </Typography>

        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}

        <Typography
          sx={{
            color: 'black',
            marginRight: '0px',
            marginLeft: 'auto',
            fontWeight: '500',
            fontSize: '18px',
          }}
        >
          {`${totalPrice} L`}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={itemsStyle}>
          {cartItems.map((item) => (
            <CheckoutItem key={`${item.name}_${item.size}`} cartItem={item} />
          ))}
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
          <Typography
            sx={{ fontSize: '16px', paddingTop: '16px', width: '100%' }}
          >
            Total
          </Typography>
          <Typography sx={{ color: '#717171', fontSize: '12px' }}>
            MDL
          </Typography>
          <Typography sx={{ fontSize: '22px', fontWeight: '500' }}>
            {`${totalPrice} L`}
          </Typography>
        </Box>
      </AccordionDetails>
      <Divider />
    </Accordion>
  );
};

export default AccordionComponent;
