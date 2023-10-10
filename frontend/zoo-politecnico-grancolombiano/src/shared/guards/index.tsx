import { Navigate } from 'react-router-dom';
import { FC } from 'react';
import { SharedPreference } from '../../utils/settings';

export const AnonymousGuard: FC<{ component: JSX.Element }> = ({
  component,
}) => {
  const userLogged = SharedPreference.getItem({ key: 'user' });
  return !userLogged ? component : <Navigate to={'/dashboard'} />;
};

export const ProtectedGuard: FC<{ component: JSX.Element }> = ({
  component,
}) => {
  const userLogged = SharedPreference.getItem({ key: 'user' });
  return userLogged ? component : <Navigate to={'/'} />;
};
