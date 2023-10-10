import { useEffect, useState } from 'react';
import { SharedPreference } from '../../utils/settings';
import { IUser } from '../models/user';

const useUserLogged = () => {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [userIsLogged, setUserLogged] = useState(false);

  const handleLoogedAccount = () => {
    const preference = SharedPreference.getItem({ key: 'user' });

    if (preference) setUser(JSON.parse(preference as string) as IUser);
    setUserLogged(preference ? true : false);
  };

  useEffect(handleLoogedAccount, []);
  window.addEventListener('newSharedPreference', handleLoogedAccount);

  useEffect(() => {
    return () => {
      window.removeEventListener('newSharedPreference', handleLoogedAccount);
    };
  }, []);

  return { userIsLogged, user };
};

export default useUserLogged;
