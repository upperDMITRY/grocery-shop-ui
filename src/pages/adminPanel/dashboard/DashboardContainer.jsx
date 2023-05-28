import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Dashboard from '../../../components/adminPanel/dashboard/Dashboard';
import DashboardError from '../../../components/adminPanel/dashboard/DashboardError';
import PanelTitle from '../../../components/adminPanel/dashboard/PanelTitle';
import Spinner from '../../../components/common/Spinner';

const DashboardContainer = ({ setActive, active }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState({
    newUserRegistrations: 0,
    uniqueUsers: 0,
    newOrders: 0,
    incompleteOrders: 0,
    mostSoldProducts: [],
  });

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    setActive('dashboard');
  }, [setActive]);

  const getData = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: '/api/dashboard',
        headers: { Authorization: token },
      });
      if (response.status === 200) {
        setIsLoading(false);
        setData(response.data);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err && err.response) {
          if (err.response.data.error) {
            setError(err.response.data.error);
          } else if (err.response.data.status) {
            setError(err.response.data.status);
          }
          setIsLoading(false);
        }
      }
    }
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <Box>
      <PanelTitle title={'Dashboard'} icon={active} />
      {isLoading ? (
        <Spinner margin={'200px'} size={'100px'} />
      ) : error ? (
        <DashboardError error={error} />
      ) : (
        <Dashboard data={data} active={active} />
      )}
    </Box>
  );
};

export default DashboardContainer;
