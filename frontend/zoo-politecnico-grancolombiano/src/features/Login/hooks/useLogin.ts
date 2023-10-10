import { useState } from 'react';
import { AxiosInstance } from '../../../shared/connections/axios.connection';
import { endpoints, urls } from '../../../shared/constants';
import { IAuthUserInputs } from '../../../shared/models/login';
import { useNavigate } from 'react-router-dom';
import { SharedPreference } from '../../../utils/settings';

type LoginPayload = {
  payload: IAuthUserInputs;
};

const useLogin = () => {
  const navigate = useNavigate();
  const { axios } = AxiosInstance.getInstance();

  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleLogin = ({ payload }: LoginPayload) => {
    setError(false);
    setLoading(true);

    axios
      .post(endpoints.authentication.login, {
        ...payload,
      })
      .then((user) => {
        navigate(urls.dashboard);
        SharedPreference.setItem({
          key: 'user',
          preference: JSON.stringify(user.data),
        });
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  return { hasError, isLoading, handleLogin };
};

export default useLogin;
