// src/components/PrivateRoute.js
import { Navigate } from 'react-router-dom';
import { useGlobalState } from '../hooks/useGlobalState';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const { user } = useGlobalState();

  return user || localStorage.getItem('userData') ? (
    children
  ) : (
    <Navigate to='/login' replace={true} />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
