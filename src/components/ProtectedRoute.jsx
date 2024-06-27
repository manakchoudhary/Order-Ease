// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return currentUser ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
