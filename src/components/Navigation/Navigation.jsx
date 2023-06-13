import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">
        <IoHome size="2em" />
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts">Phonebook</NavLink>}
    </nav>
  );
};
