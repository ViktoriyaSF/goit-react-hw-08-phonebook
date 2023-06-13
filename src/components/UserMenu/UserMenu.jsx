import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { BtnExit, UserMenuStyled } from './UserMenu.staled';
import { ImExit } from 'react-icons/im';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuStyled>
      <p>Welcome, {user.name}</p>
      <BtnExit type="button" onClick={() => dispatch(logOut())}>
        <ImExit size="2em" />
      </BtnExit>
    </UserMenuStyled>
  );
};
