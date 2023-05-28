import { Box } from '@mui/material';
import Board from './Board.jsx';
import Chart from './Chart';
import newOrdersIcon from '../../../assets/dashboard/new_orders.svg';
import incompleteOrdersIcon from '../../../assets/dashboard/incomplete_orders.svg';
import userRegistrationIcon from '../../../assets/dashboard/user_registration.svg';
import uniqueVisitorsIcon from '../../../assets/dashboard/unique_visitor.svg';
import ChartTitle from './ChartTitle.jsx';

const Dashboard = ({ data }) => {
  const {
    newUserRegistrations,
    uniqueUsers,
    newOrders,
    incompleteOrders,
    mostSoldProducts,
  } = data;

  const sortProducts = (data) => {
    const result = [];
    if (data.length === 0) {
      return result;
    }
    const sorted = data.sort((a, b) => b.quantity - a.quantity);

    sorted.map((item) =>
      result.push({
        name: item.name,
        steps: item.quantity,
        pictureSettings: { src: item.image },
      })
    );
    return result;
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
          padding: '15px 15px 0 15px',
        }}
      >
        <Board
          backgroundColor="#17a2b7"
          title="New Order"
          value={newOrders}
          icon={newOrdersIcon}
        />
        <Board
          backgroundColor="#27a844"
          title="Incomplete Orders"
          value={incompleteOrders}
          icon={incompleteOrdersIcon}
        />
        <Board
          backgroundColor="#fec107"
          title="User Registrations"
          value={newUserRegistrations}
          icon={userRegistrationIcon}
        />
        <Board
          backgroundColor="#dc3546"
          title="Unique Visitors"
          value={uniqueUsers}
          icon={uniqueVisitorsIcon}
        />
      </Box>
      <Box>
        {mostSoldProducts.length ? (
          <ChartTitle title={`Top ${mostSoldProducts.length} sold products:`} />
        ) : (
          <ChartTitle title="No products sold" />
        )}
        <Chart topFiveProducts={sortProducts(mostSoldProducts)} />
        <Box
          sx={{
            marginTop: '-20px',
            height: '50px',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'block',
              position: 'absolute',
              height: 'inherit',
              width: '100%',
              backgroundColor: 'white',
              zIndex: 100,
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
