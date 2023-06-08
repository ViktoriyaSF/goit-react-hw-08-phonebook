import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/contacts">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Tasks</NavLink>}
    </nav>
  );
};
