import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../../../shared/connections/axios.connection';
import { useState } from 'react';
import {
  delayNavigation,
  endpoints,
  messages,
  urls,
} from '../../../shared/constants';
import { IUserInputs } from '../../../shared/models/user';
import useShowNotification from '../../../shared/hooks/useShowNotififcation';

type UserPayload = {
  payload: IUserInputs;
};

const useAddUser = () => {
  const navigate = useNavigate();
  const { axios } = AxiosInstance.getInstance();

  const { showNotification, showErrorNotification } = useShowNotification();

  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleAddUser = ({ payload }: UserPayload) => {
    setError(false);
    setLoading(true);

    axios
      .post(endpoints.users.create, {
        ...payload,
      })
      .then(() => {
        showNotification({
          message: messages.users.success,
        });
        setTimeout(() => {
          navigate(urls.users);
        }, delayNavigation);
      })
      .catch(() => {
        setError(true);
        showErrorNotification({
          message: messages.users.error,
        });
      })
      .finally(() => setLoading(false));
  };

  return { hasError, isLoading, handleAddUser };
};

export default useAddUser;
