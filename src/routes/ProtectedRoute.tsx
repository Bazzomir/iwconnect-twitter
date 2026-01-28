import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface Props {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: Props) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <p style={{ color: 'white', textAlign: 'center', marginTop: '2rem' }}>
        Loading...
      </p>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
};
