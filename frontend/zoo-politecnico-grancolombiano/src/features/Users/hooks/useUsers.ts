import { useEffect, useState } from 'react';
import { AxiosInstance } from '../../../shared/connections/axios.connection';
import { IUser } from '../../../shared/models/user';
import { endpoints, messages } from '../../../shared/constants';
import useShowNotification from '../../../shared/hooks/useShowNotififcation';

const useUsers = () => {
  const { axios } = AxiosInstance.getInstance();

  const { showNotification, showErrorNotification } = useShowNotification();

  const [users, setUsers] = useState<IUser[]>([]);
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const getUsers = () => {
    setError(false);
    setLoading(true);

    axios
      .get(endpoints.users.get)
      .then((users) => {
        setUsers(users.data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  const handleDeleteUser = (userId: number) => {
    setError(false);
    setLoading(true);

    axios
      .delete(endpoints.users.delete.replace(':id', `${userId}`))
      .then(() => {
        getUsers();
        showNotification({ message: messages.delete.success });
      })
      .catch(() => {
        setError(true);
        showErrorNotification({ message: messages.delete.error });
      })
      .finally(() => setLoading(false));
  };

  useEffect(getUsers, [axios]);

  return { users, hasError, isLoading, handleDeleteUser };
};

export default useUsers;
