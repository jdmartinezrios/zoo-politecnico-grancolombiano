import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../../../shared/connections/axios.connection';
import { useState } from 'react';
import {
  delayNavigation,
  endpoints,
  messages,
  urls,
} from '../../../shared/constants';
import useShowNotification from '../../../shared/hooks/useShowNotififcation';
import { IAttentionInputs } from '../../../shared/models/attentions';

type UserPayload = {
  payload: IAttentionInputs;
};

const useAddAttention = () => {
  const navigate = useNavigate();
  const { axios } = AxiosInstance.getInstance();

  const { showNotification, showErrorNotification } = useShowNotification();

  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleAddAttention = ({ payload }: UserPayload) => {
    setError(false);
    setLoading(true);

    axios
      .post(endpoints.attentions.create, {
        ...payload,
      })
      .then(() => {
        showNotification({
          message: messages.attentions.success,
        });
        setTimeout(() => {
          navigate(urls.attentions);
        }, delayNavigation);
      })
      .catch(() => {
        setError(true);
        showErrorNotification({
          message: messages.attentions.error,
        });
      })
      .finally(() => setLoading(false));
  };

  return { hasError, isLoading, handleAddAttention };
};

export default useAddAttention;
